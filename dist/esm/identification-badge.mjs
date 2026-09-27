export const name="identification-badge";
export const id="dl_0c0394ae85de4dbf8ad6";
export const url=new URL("../icons/identification-badge.svg?v=76dade7d77018ee8304819ac035d684ac1151188f61604cd47755cadacf8eb30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
