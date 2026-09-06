export const name="drop-half-bottom-fill";
export const id="dl_112796ef3f9e41f2a242";
export const url=new URL("../icons/drop-half-bottom-fill.svg?v=e558f0e3aee99328c511e4551bdbe9c2275acb480044cefe730515fd9bc5095d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
