export const name="building-apartment-bold";
export const id="dl_128584040c2140c49013";
export const url=new URL("../icons/building-apartment-bold.svg?v=d3e4c7fb5025aa81b58a9cca7013f0238e8a4c0be796bb3591e3218ac1bd2f15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
