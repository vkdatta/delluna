export const name="approval_delegation_off";
export const id="dl_5e6056e0495209a1446a";
export const url=new URL("../icons/approval_delegation_off.svg?v=33c74f1f552e480a22fbd11c6164c97bea804c989cffd2a7716ff277852ce010",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
