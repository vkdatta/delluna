export const name="unite-square-bold";
export const id="dl_d97720802d573b97508b";
export const url=new URL("../icons/unite-square-bold.svg?v=12901020447b6d8d8ba910722f1fcd658a02cb0ffb4071671693dfe345f8bea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
