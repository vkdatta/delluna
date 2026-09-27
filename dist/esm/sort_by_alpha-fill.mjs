export const name="sort_by_alpha-fill";
export const id="dl_8908bb43e9aeaff71886";
export const url=new URL("../icons/sort_by_alpha-fill.svg?v=99d4e0609dc11322603b0faf28bf11e755b63d7deae4284f2e8a8ab946c8a728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
