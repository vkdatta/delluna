export const name="view_apps-fill";
export const id="dl_6b5e4eff98cc02bab9b1";
export const url=new URL("../icons/view_apps-fill.svg?v=03881c39626bad9d1ceeeb55413e129c4e138142daa96f487e214d5715ed3e2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
