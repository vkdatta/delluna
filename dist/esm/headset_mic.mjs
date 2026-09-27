export const name="headset_mic";
export const id="dl_9dd0847cf1be600364f0";
export const url=new URL("../icons/headset_mic.svg?v=d4cb6f45d4b81d3020295f5225f279d7cf2774d9e6d67da9b3f7671677d58a7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
