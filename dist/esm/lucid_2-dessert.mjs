export const name="lucid_2-dessert";
export const id="dl_f2115d50813b4b9fbdaa";
export const url=new URL("../icons/lucid_2-dessert.svg?v=4b27487e0bce24ca9bc63f2cc17789b3a10e2cc606a80347aa5010a6a7463ec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
