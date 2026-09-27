export const name="gender-female-fill";
export const id="dl_bd65ad7e65444ba891fc";
export const url=new URL("../icons/gender-female-fill.svg?v=8e11d99dc67da62291728279808a69e721da0988ab6645b3d562561e7c25f8fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
