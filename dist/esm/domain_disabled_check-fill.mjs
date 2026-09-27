export const name="domain_disabled_check-fill";
export const id="dl_8b72d1530831df7e5039";
export const url=new URL("../icons/domain_disabled_check-fill.svg?v=c757991cf7019241e79cad685c0e255f83d19a23e06f490e03e44be7185713b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
