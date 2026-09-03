export const name="article-ny-times";
export const id="dl_ac5b227d0b154ad6b2fa";
export const url=new URL("../../icons/A/article-ny-times.svg?v=c9935dbe9d3b00c3dfed41fe36c9661a6910d36fbb9b9780b9441f1d708f980c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
