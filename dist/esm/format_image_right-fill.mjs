export const name="format_image_right-fill";
export const id="dl_eb4707e5239a4a39affe";
export const url=new URL("../icons/F/format_image_right-fill.svg?v=e492cf4caa553a9528df17dc40422e176bda0b15230584e2a7eedcbd1e99aba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
