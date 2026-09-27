export const name="branding_watermark-fill";
export const id="dl_aed8a642fb654f5b3e95";
export const url=new URL("../icons/branding_watermark-fill.svg?v=1b8f0026afbf26893088649c6b3f8d42a040193b80e773a120c56cb54c86b75a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
