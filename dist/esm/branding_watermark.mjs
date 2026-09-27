export const name="branding_watermark";
export const id="dl_d60f0292dea53caac4c2";
export const url=new URL("../icons/branding_watermark.svg?v=12f1e7c779d43c890976d8cc47e0206961c5e88e57463d121fbf7e79a9510065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
