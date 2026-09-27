export const name="arrows-in-line-vertical-light";
export const id="dl_11a0406092704e8ea4b7";
export const url=new URL("../icons/arrows-in-line-vertical-light.svg?v=134f13c0d316196129359374a7d39906bfaa8f8dec0b14323272735971696924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
