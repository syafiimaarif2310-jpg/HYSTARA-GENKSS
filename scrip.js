const upload = document.getElementById("upload");
const gallery = document.getElementById("gallery");

upload.addEventListener("change", function(event){

  const files = event.target.files;

  for(let i = 0; i < files.length; i++){

    const file = files[i];

    if(file){

      const reader = new FileReader();

      reader.onload = function(e){

        // Membuat card baru
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${e.target.result}">
          <div class="text">
            <h3>Foto Baru</h3>
            <p>Foto berhasil ditambahkan.</p>
          </div>
        `;

        gallery.appendChild(card);
      }

      reader.readAsDataURL(file);
    }
  }

});