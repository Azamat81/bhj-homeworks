(() => {
  const reveal = Array.from(document.getElementsByClassName("reveal"));

  document.addEventListener("scroll", () => {
      let innerHeight = window.innerHeight;

      reveal.forEach(e => {
          let top = e.getBoundingClientRect().top;
          let height = e.getBoundingClientRect().height;

          if ((0 - height) < top && top < innerHeight) {
              setTimeout(() => {
                  e.classList.add("reveal_active");
              }, 200)
          } else {
              e.classList.remove("reveal_active");
          }
      });
  });
})();
