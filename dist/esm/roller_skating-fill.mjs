export const name="roller_skating-fill";
export const id="dl_cd999de678d14b8c9671";
export const url=new URL("../icons/roller_skating-fill.svg?v=f451b067fb24d5758b140805c43a56f4b1a9315982ac42c3e5ef26e4095977f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
