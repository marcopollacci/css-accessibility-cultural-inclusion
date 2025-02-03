const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    const isVisibile = mutation.target.getAttribute('aria-hidden') === 'false';
    document.querySelectorAll('.example-inclusion-2 div span').forEach(el => {
      const value = '1em';
      el.style.marginRight = !isVisibile ? value : '';
      el.style.marginInlineEnd = isVisibile ? value : '';
    });
  });
});
observer.observe(document.querySelector('.example-inclusion-2 p-fragment.trigger'), {
  attributes: true,
  attributeFilter: ['aria-hidden']
});
