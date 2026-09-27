export const name="branding_watermark";
export const id="dl_45cd0b43e1035b59343b";
export const url=new URL("../icons/branding_watermark.svg?v=35d77912e19b6b4ad6d706ed6838ef6f8177d239552c971fbf3871a7c5a4470c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
