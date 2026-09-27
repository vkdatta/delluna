export const name="footprint-fill";
export const id="dl_ffd1b7a3222ac3321f14";
export const url=new URL("../icons/footprint-fill.svg?v=9dece9b35efce346982bbf91c416d58468697938ce61f664bb4fac6d854d572b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
