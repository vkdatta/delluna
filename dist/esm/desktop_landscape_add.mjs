export const name="desktop_landscape_add";
export const id="dl_d92166690f8fbee48979";
export const url=new URL("../icons/desktop_landscape_add.svg?v=81d1f64369952dc403da873bb329c4943cd42207bc34421d4379990238803bc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
