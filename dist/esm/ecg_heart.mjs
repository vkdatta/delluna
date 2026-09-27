export const name="ecg_heart";
export const id="dl_58b7578ce6474e7a5562";
export const url=new URL("../icons/ecg_heart.svg?v=d8488f6c24a5da44704fe917b9cfb3166df262cb5658dc8cf6bb66b2519693a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
