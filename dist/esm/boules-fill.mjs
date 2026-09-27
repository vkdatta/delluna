export const name="boules-fill";
export const id="dl_dc16d9cf9315429386ca";
export const url=new URL("../icons/boules-fill.svg?v=d0d521a420b277dbae57ef630df289e91bbd5be56e312d295ac3fb91c737c461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
