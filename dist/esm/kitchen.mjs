export const name="kitchen";
export const id="dl_42683ff1a9c6b9b542a0";
export const url=new URL("../icons/kitchen.svg?v=a0dff90e60941987ceeb94782433229ee7c6fbf5c5479048be7dfea555c2806b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
