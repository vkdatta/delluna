export const name="arrow-line-down-right-fill";
export const id="dl_237040bc6ce74cc6ac22";
export const url=new URL("../icons/arrow-line-down-right-fill.svg?v=2ba37aa94f03e366960f07bafc8bcbd267a6ee4715b46e657481e35453219a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
