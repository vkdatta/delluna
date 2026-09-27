export const name="grid_goldenratio-fill";
export const id="dl_a313c73621ec5851fa54";
export const url=new URL("../icons/grid_goldenratio-fill.svg?v=6498b8fba6bc4183afd9f867893dba9f5dc7ab78536fb8f0b6fbc464f1b77dd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
