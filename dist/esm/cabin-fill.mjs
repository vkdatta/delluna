export const name="cabin-fill";
export const id="dl_474a99d0fcd404109fc0";
export const url=new URL("../icons/cabin-fill.svg?v=d3fb08d2636102d3553aac2d45a73d665b9b646aa3f1a84b77bc54f90a55dd0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
