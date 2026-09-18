export const name="notifications_active";
export const id="dl_5f350e534c6d484b90d5";
export const url=new URL("../icons/notifications_active.svg?v=afea5b805227de027b1764a52167cf45a58dfaf281331c3e8a96ea07c7e95c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
