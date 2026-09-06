export const name="magnifying-glass-fill";
export const id="dl_8fe1e0419be44cb39cbd";
export const url=new URL("../icons/magnifying-glass-fill.svg?v=e7cf953bb787af2a4b11f8a248f35b56aab2f2b44f535d03593f490a4a633244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
