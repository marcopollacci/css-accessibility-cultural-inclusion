const exampleTwo = () => {
  const spanToCheck = Array.from(document.querySelectorAll('.example-inclusion-2 div span'));
  const faces = spanToCheck.map(el => el.innerHTML);
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      const isVisibile = mutation.target.getAttribute('aria-hidden') === 'false';
      spanToCheck.forEach((el, index) => {
        const value = '1em';
        el.style.marginRight = !isVisibile ? value : '';
        el.style.marginInlineEnd = isVisibile ? value : '';
        if (index === 1) {
          el.innerHTML = faces[isVisibile ? 0 : 1];
        }
      });
    });
  });
  observer.observe(document.querySelector('.example-inclusion-2 p-fragment.trigger'), {
    attributes: true,
    attributeFilter: ['aria-hidden']
  });
};

exampleTwo();
