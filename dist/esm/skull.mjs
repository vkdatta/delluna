export const name="skull";
export const id="dl_74efc8a96fbf48dba336";
export const url=new URL("../icons/S/skull.svg?v=c62ffcb3e1e7cbd0f2b9ca7bb2074cca7bcbd076d511acce5766e7eb2b10a843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
