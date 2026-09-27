export const name="dentistry-fill";
export const id="dl_f6c9ce724232b53bed15";
export const url=new URL("../icons/dentistry-fill.svg?v=9a5c54a4af4b25e3825f664dbdc41ca6e6f4980d9f680612383698f94278fc54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
