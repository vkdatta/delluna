export const name="exposure_plus_2-fill";
export const id="dl_42b9c1e87ba1aa39d96e";
export const url=new URL("../icons/exposure_plus_2-fill.svg?v=ad39f7b2b5da8510d333ad6f776e97d25837ec4b16f4b73fd653c9498bcd9f29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
