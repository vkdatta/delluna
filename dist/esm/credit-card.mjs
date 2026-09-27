export const name="credit-card";
export const id="dl_30fe094e0a0f43d6b8ce";
export const url=new URL("../icons/credit-card.svg?v=7b352ab286598916f2791ddc91d80962ae9151b58e06533d0ce40093e490f8d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
