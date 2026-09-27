export const name="closed_caption_add";
export const id="dl_d9ddee3d078cf7311304";
export const url=new URL("../icons/closed_caption_add.svg?v=4f9d308de425cc6a98b6fd1d76e7c53e9996dcbd722a8807c68017e54b080a59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
