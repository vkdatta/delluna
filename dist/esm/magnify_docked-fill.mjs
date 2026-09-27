export const name="magnify_docked-fill";
export const id="dl_85528d7c27f4d39fa3c9";
export const url=new URL("../icons/magnify_docked-fill.svg?v=d4d6cf8b137e1e01934512dd82e4c5306465811574ea2778714950bd61491627",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
