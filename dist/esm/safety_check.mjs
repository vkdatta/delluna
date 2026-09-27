export const name="safety_check";
export const id="dl_8c961bc802cdebfe8840";
export const url=new URL("../icons/safety_check.svg?v=8aee9d6ecb994036053c09e272c888caf870af55c2b4b468d6bff30069c93d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
