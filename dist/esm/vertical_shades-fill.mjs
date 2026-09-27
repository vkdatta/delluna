export const name="vertical_shades-fill";
export const id="dl_83db0a64692fbd7a8bb9";
export const url=new URL("../icons/vertical_shades-fill.svg?v=12bd5a7f3dfbe6b6c05d1f7180a35b11498b56658067b8c9f34eb84459bc75f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
