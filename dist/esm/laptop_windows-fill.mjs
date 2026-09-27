export const name="laptop_windows-fill";
export const id="dl_ba4463a18ccf7258b16b";
export const url=new URL("../icons/laptop_windows-fill.svg?v=339167ad273fa71e621d8d9ed0170583e88a2460e9e6700f52c3acca2b13d8df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
