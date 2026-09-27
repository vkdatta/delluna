export const name="folder_info-fill";
export const id="dl_a6fe9c856180031086e0";
export const url=new URL("../icons/folder_info-fill.svg?v=bd58bc4e43ceae2c457d466df9bd184279db6b6b07ca9637dffaf01455a5d6b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
