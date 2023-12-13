function hide() {
    var s = document.getElementById("test");
    s.classList.toggle('d-none');
    console.log(s);
  }
  let side = document.querySelector(".sidebar");
  function showSidebar() {
    side.classList.toggle("d-block");
  }