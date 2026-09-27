export const name="check-fill";
export const id="dl_973d99e0225528383baa";
export const url=new URL("../icons/check-fill.svg?v=798d01ad072292b11b7de1166c600f8b6190b011a99d23dd12e677f01e47b05a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
