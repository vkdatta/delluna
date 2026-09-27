export const name="lucid_3-nut-off";
export const id="dl_266298d274824d8885ca";
export const url=new URL("../icons/lucid_3-nut-off.svg?v=19096a2441b0e67f8a760274bcf9b89d46b65f9d2111b804a919aabdce10b83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
