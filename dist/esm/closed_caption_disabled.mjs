export const name="closed_caption_disabled";
export const id="dl_1f177d27a46f44018354";
export const url=new URL("../icons/closed_caption_disabled.svg?v=905073d4cbdb3da092f51f1b3564886fc97cfbc63e17bbb73fb9ad54fe8900dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
