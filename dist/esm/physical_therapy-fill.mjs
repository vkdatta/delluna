export const name="physical_therapy-fill";
export const id="dl_3a8c53fdb302448b8a8f";
export const url=new URL("../icons/physical_therapy-fill.svg?v=42a18e897f5532b4424deee22d008e07841a913d16f06fcd4f47867eaf0fba01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
