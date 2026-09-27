export const name="phone-call-fill";
export const id="dl_407488d3406748e09b99";
export const url=new URL("../icons/phone-call-fill.svg?v=76232266bafb33e95724575e9acd8af9ca3ccb77bc2de5074d284e1219ee97a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
