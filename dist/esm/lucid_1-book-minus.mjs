export const name="lucid_1-book-minus";
export const id="dl_d2f6d0dd91cf4af8a445";
export const url=new URL("../icons/lucid_1-book-minus.svg?v=f1e8ae7c42a895caa88a847e226d0eb3c071a968e5dc4c220362f34a791ebf2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
