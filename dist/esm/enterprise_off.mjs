export const name="enterprise_off";
export const id="dl_ae881f15ad3df6b41ed4";
export const url=new URL("../icons/enterprise_off.svg?v=6ac00f79068648b796d1f30a8188b7664b3f6f2f6ef91a31daf7a3b5a1405f2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
