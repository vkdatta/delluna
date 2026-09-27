export const name="lucid_3-piano";
export const id="dl_fee7b600f8f346abaafa";
export const url=new URL("../icons/lucid_3-piano.svg?v=e44f655f75d32f7d3505614fb8582e6b11b0b77a6ecabd7db24163d0f9985b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
