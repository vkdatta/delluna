export const name="caret-right";
export const id="dl_fe56bb78f99848e78d29";
export const url=new URL("../icons/caret-right.svg?v=fafe0a254d71d64d82942a63c564584d85e7789989520da324c940dbf8801dcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
