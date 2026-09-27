export const name="lucid_2-layers-arrow-up";
export const id="dl_eabb09c6e42240c2a4bb";
export const url=new URL("../icons/lucid_2-layers-arrow-up.svg?v=5a793eabc806ec97827e83e7d802fe79c55c1cbbece57195dbf575c5a15b2288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
