export const name="spiral-thin";
export const id="dl_49d539cae4e320e7a34b";
export const url=new URL("../icons/spiral-thin.svg?v=6d7c0321ea8397af4951c0b655772f3f9ff25426a2068ab4e7e48d06483facb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
