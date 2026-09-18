export const name="file_save_off-fill";
export const id="dl_56941c09544d483d8285";
export const url=new URL("../icons/file_save_off-fill.svg?v=c2e14bb9705607ea94c801e295fb9f6a1a762ae0d2b39ead6676fe6a3156ae27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
