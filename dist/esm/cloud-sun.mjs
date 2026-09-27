export const name="cloud-sun";
export const id="dl_57a0d53ad92547349820";
export const url=new URL("../icons/cloud-sun.svg?v=afaaf433d1ec2cf77f1e43aec3d0341899ae021fdd6646c0b284cc5554c6a4f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
