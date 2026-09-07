export const name="stethoscope-duotone";
export const id="dl_4ca53d5a613f440e8a55";
export const url=new URL("../icons/S/stethoscope-duotone.svg?v=2b0c8777e6ea43ec2a831670f2dbd58063b77bca79baca9c4f42cd18985e1274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
