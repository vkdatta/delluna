export const name="cloud-rain-light";
export const id="dl_ab41b13f95314abe90cf";
export const url=new URL("../icons/cloud-rain-light.svg?v=7ec21658e7a0a3911b9156bf963b5cb7f125b9b526f9a6c2ae56e8b61d7bb6db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
