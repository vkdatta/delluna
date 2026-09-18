export const name="grid_4x4-fill";
export const id="dl_3b70d7628ad0482287f6";
export const url=new URL("../icons/G/grid_4x4-fill.svg?v=bc4f1f7fd8f5d13a05b40a56372972fd5363e347f418a613cd8a05938505ecad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
