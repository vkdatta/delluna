export const name="edit_off-fill";
export const id="dl_eacd492de979474b9d10";
export const url=new URL("../icons/E/edit_off-fill.svg?v=3dffca1c5cf82132f463d91a6f831b3306de79e7c88153923f96ee42cfe96014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
