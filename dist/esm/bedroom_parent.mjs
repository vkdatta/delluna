export const name="bedroom_parent";
export const id="dl_38a1a7539faa8d4490c2";
export const url=new URL("../icons/bedroom_parent.svg?v=5cbfa88aeb4dedb5f50ec2c9d7825f96f5c8097ab211fbc9524710515cf8577f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
