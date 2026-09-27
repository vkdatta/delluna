export const name="work_alert";
export const id="dl_27a6d22791f78a790887";
export const url=new URL("../icons/work_alert.svg?v=480fd1dc1c82d013629f66b743228536122c9fbdad6bc3310f30676798cef55f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
