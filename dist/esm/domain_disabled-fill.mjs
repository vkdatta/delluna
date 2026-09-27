export const name="domain_disabled-fill";
export const id="dl_cb6cd35400dd4eb01f43";
export const url=new URL("../icons/domain_disabled-fill.svg?v=e0862ddf6a90fda32ddf9e1876f8ae10a98f8236a9f9c3b513d7d72850471237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
