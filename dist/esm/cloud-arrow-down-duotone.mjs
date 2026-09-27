export const name="cloud-arrow-down-duotone";
export const id="dl_88b5380f010f4efcb8db";
export const url=new URL("../icons/cloud-arrow-down-duotone.svg?v=07c8156130b47ba884c709a2af7c135b212746ff9da9f0ca4f50f628bd454bf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
