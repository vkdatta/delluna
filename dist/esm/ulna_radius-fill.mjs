export const name="ulna_radius-fill";
export const id="dl_02b96b399fc92776e10c";
export const url=new URL("../icons/ulna_radius-fill.svg?v=9c9c2eccae452d37fb8055e9b512cbb5b347a9243e6c995deee5cc11cda2b3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
