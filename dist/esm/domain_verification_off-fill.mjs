export const name="domain_verification_off-fill";
export const id="dl_8f0d4b73dce2e10f3019";
export const url=new URL("../icons/domain_verification_off-fill.svg?v=91b4a4b2e569814ed7451ef47cbde1330c50e8d0d6971816f2e9b7b91c0d684c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
