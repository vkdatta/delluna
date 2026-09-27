export const name="contact_page";
export const id="dl_19458addb189a2f32d1e";
export const url=new URL("../icons/contact_page.svg?v=336954e3e9d269148e2a84339a7cf5889409a3af434568b29b68b2d666e3d4e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
