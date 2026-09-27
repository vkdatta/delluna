export const name="cloud-snow-duotone";
export const id="dl_1364c59225e14335a27b";
export const url=new URL("../icons/cloud-snow-duotone.svg?v=46b3baf25d940a48d51b9a23b24b1700cf32cb70446627daeda24ae8ef680df9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
