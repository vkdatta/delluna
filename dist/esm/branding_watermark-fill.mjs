export const name="branding_watermark-fill";
export const id="dl_9755a3365e5169ca9c9d";
export const url=new URL("../icons/branding_watermark-fill.svg?v=69294360d80c54aee29d4130813006a0c390bf96371a9ec8c9315a248d117efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
