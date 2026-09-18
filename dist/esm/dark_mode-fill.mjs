export const name="dark_mode-fill";
export const id="dl_a3cd494367a043bcb008";
export const url=new URL("../icons/dark_mode-fill.svg?v=38ff66d79630f36e01fc7f0de2dff4edb1fecaf929abc9e3f8bc914058c31bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
