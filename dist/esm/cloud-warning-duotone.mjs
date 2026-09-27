export const name="cloud-warning-duotone";
export const id="dl_a817e2ee20ca4751aebc";
export const url=new URL("../icons/cloud-warning-duotone.svg?v=2cfcd41669c5bf261d69a2a31a0143c01a23ef6c7c259dad53bc13ce249f29dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
