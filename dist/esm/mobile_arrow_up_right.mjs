export const name="mobile_arrow_up_right";
export const id="dl_cf22bcfdf26fd033e159";
export const url=new URL("../icons/mobile_arrow_up_right.svg?v=1dc2a15c01f33b09595d7be6fdd39eb9b89b8453412ca1b6015dd067eca5a3ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
