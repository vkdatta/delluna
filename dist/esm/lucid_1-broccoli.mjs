export const name="lucid_1-broccoli";
export const id="dl_22bbf55496c4491d8be8";
export const url=new URL("../icons/lucid_1-broccoli.svg?v=8d4f85154e06cc6cd6b312e9132a79758cc2b3ebf02700003b5ba412115dc49f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
