export const name="arrow_upward-fill";
export const id="dl_f18c0b428ea94ff0cf04";
export const url=new URL("../icons/arrow_upward-fill.svg?v=1e14e3051ee06dd90c294a13e25bdc635d84be9b8b037d24e9a8587ad4b68130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
