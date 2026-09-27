export const name="megaphone-simple-fill";
export const id="dl_fd9e0ac082464f79b241";
export const url=new URL("../icons/megaphone-simple-fill.svg?v=a3f9b2252644cc1b050603854824dfdd0c61606ad9253259c913913f35d121bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
