export const name="cell-signal-none-bold";
export const id="dl_f4a66c2722b944fda205";
export const url=new URL("../icons/cell-signal-none-bold.svg?v=c2ca67ba0509802a7cb72d5b38887ee69bc5b4fe8ab3f22b85ddb7d812970ca2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
