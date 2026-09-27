export const name="cell_tower-fill";
export const id="dl_5d57194ebb8d92e25f38";
export const url=new URL("../icons/cell_tower-fill.svg?v=9c1a6a4d43d4cb24b4e0fab4cbe3d83b6eb2ea82f2d29dc0ac75bb400017c868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
