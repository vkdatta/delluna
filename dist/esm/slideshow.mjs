export const name="slideshow";
export const id="dl_e3b3397be386346287ea";
export const url=new URL("../icons/slideshow.svg?v=7ae6f9e4f84f77bc9ab897c4d68d1fdad4aa38595b4e4bf4273e52533412e50e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
