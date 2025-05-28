const handleSplitTextWorksDetail = () => {


  let mql = window.matchMedia("(min-width: 1024px)").matches;
  if (mql) {
    const textSplitting = Splitting({
      target: [".project-one-line", ".project-two-line"],
      by: "chars",
      key: null,
    });
    Object.keys(textSplitting).forEach((key) => {
      textSplitting[key].words.forEach((char) => {
        const core = char.cloneNode(true);
        char.innerHTML = "";
        char.classList.add("is-parrent");
        core.classList.add("is-children");
        char.append(core);
      });
    });
  }

};

export default handleSplitTextWorksDetail;
