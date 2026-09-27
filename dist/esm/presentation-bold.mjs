export const name="presentation-bold";
export const id="dl_fdd08654aff24a2292a4";
export const url=new URL("../icons/presentation-bold.svg?v=6e0fbb062e97154343e269c4c6faa8c30e7fdf38087a91e3125891bcf49705f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
