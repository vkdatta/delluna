export const name="desktop_landscape_add";
export const id="dl_aa2fedb8cb9d74e3df92";
export const url=new URL("../icons/desktop_landscape_add.svg?v=0294830b8cbf81eeb8b8c7ab4fdf401506203cbe24b9c4e62323727ca174854d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
