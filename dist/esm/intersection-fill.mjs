export const name="intersection-fill";
export const id="dl_c54f0f5345a548129cfc";
export const url=new URL("../icons/intersection-fill.svg?v=052c9728ca896db88d34e24f570fcc1b6a3ae27ac292727fc3116d9a2f90d4fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
