export const name="lucid_3-parasol";
export const id="dl_2b668dc347994e8eb1f5";
export const url=new URL("../icons/lucid_3-parasol.svg?v=79fe80fbd92ae46c1f9b1061ac81a7ab90741f66de3c40ba058f8c2c5dc7457c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
