export const name="refresh-fill";
export const id="dl_64490d71b92ce498337a";
export const url=new URL("../icons/refresh-fill.svg?v=88b12810c96d186f2520700f43bff072cad0303856c0a662ae12f363bd590fba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
