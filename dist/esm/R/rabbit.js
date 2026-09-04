export const name="rabbit";
export const id="dl_dcaea3bce9054f5bb3ad";
export const url=new URL("../../icons/R/rabbit.svg?v=7b44e3050c2bd81471b3c067b5ba940df46cac0da8721316acfb0d0e8b364801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
