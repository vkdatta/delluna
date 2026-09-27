export const name="selection-plus-fill";
export const id="dl_4b70cf0975b10a3d520f";
export const url=new URL("../icons/selection-plus-fill.svg?v=21cd59bb2d821334c1d4479a6073302637e7e8882a8e001acf3022e922bc3ace",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
