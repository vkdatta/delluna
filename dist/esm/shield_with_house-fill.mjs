export const name="shield_with_house-fill";
export const id="dl_904f3e627318535cdf93";
export const url=new URL("../icons/shield_with_house-fill.svg?v=1850158f6a992f0d6b49d96cd94bc2235f4d19f0e7ce23064eece64e094302f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
