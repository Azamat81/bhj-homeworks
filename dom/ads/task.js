(() => {
  const rotatorsCases = Array.from(document.querySelectorAll('.rotator__case'))
  
  let i = 0;
  
  setInterval(() => {
      rotatorsCases.forEach((e) => {
          e.classList.remove('rotator__case_active')
      })
      rotatorsCases[i].classList.add('rotator__case_active')
      i++;
      if(i == rotatorsCases.length){
          i = 0;
      }
  }, 1000)
  })();