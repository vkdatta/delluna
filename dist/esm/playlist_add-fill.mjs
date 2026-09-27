export const name="playlist_add-fill";
export const id="dl_f0cad88a0ad725d3dd1a";
export const url=new URL("../icons/playlist_add-fill.svg?v=f55dc83112537f3642f862ad03edc44981b4e9c0056296e207299ddf5e5f137a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
