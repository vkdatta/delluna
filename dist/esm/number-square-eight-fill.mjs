export const name="number-square-eight-fill";
export const id="dl_5985f729856449199643";
export const url=new URL("../icons/number-square-eight-fill.svg?v=68a6d1e569a38b0d805e72c4f8941af9b392c60db779a61d8cca74194c863a7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
