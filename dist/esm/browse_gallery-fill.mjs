export const name="browse_gallery-fill";
export const id="dl_1a11e6d664034668bade";
export const url=new URL("../icons/browse_gallery-fill.svg?v=f2e2df8c7fdacbe243f3d707fdcefc613ae30bcd12b9dbef0442db3206f5ee00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
