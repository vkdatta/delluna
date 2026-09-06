export const name="file-dashed-fill";
export const id="dl_952aa2d89d714442a474";
export const url=new URL("../icons/file-dashed-fill.svg?v=4de1cfd431508f74cdc28b44837f0206a136f9c661c506f51ecd892458938463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
