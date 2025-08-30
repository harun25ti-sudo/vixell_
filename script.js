      // === Estimator ===
    function calc(){
      const form = document.forms["estimatorForm"];
      const dur = Number(form.duration.value) || 1;
      const style = form.style.value;
      const chars = Number(form.characters.value) || 1;
      let base = style==="simple"?35000:style==="medium"?70000:120000;
      let price = base*dur;
      if(chars>1) price += (chars-1)*0.25*(base*dur);
      if(price<300000) price=300000;
      document.getElementById("result").innerText = "Rp " + price.toLocaleString("id-ID");
    }

    // === Kirim ke Instagram DM (pakai API direct link) ===
    function sendToInstagram(){
      const form = document.forms["estimatorForm"];
      const name = form.name.value;
      const dur = form.duration.value;
      const chars = form.characters.value;
      const price = document.getElementById("result").innerText;
      const msg = encodeURIComponent(`Halo, saya ${name}. Estimasi animasi:\nDurasi: ${dur} detik\nKarakter: ${chars}\nPerkiraan Harga: ${price}`);
      window.open(`https://www.instagram.com/direct/new/?text=${msg}`, "_blank");
    }

    // === Animasi Scroll ===
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
        }
      });
    }, { threshold:0.2 });
    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

    // === Scroll Progress Bar ===
    window.onscroll = function(){
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("progress-bar").style.width = scrolled + "%";
    }

    // === Dark/Light Mode Toggle ===
    const toggle = document.getElementById("toggle-mode");
    toggle.onclick = function(){
      document.body.classList.toggle("light");
      toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
      if(document.body.classList.contains("light")){
        document.body.style.background="#f9f9f9"; document.body.style.color="#111";
      } else {
        document.body.style.background="#121212"; document.body.style.color="#e0e0e0";
      }
    }
 