export const name="person-simple-circle-duotone";
export const id="dl_fa5d3d8dad3640459874";
export const url=new URL("../icons/person-simple-circle-duotone.svg?v=ccbac374c0c9b3c93810061dc31c790928dc87afd3dcc1d534fe9ebac9d89aa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
