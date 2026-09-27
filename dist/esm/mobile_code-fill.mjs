export const name="mobile_code-fill";
export const id="dl_aa18ac03544d1e3c95a6";
export const url=new URL("../icons/mobile_code-fill.svg?v=7130375f993180a653aaf93837860f51a03ac66482f8449de208af2f2f6be9de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
