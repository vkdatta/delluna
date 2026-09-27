export const name="water_lock";
export const id="dl_9689e4a6a4f70a741caf";
export const url=new URL("../icons/water_lock.svg?v=768964e1a3bdf5fd5098c862cbcf2ebaff90b1e02efeb0f54f10bc4305a7ba13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
