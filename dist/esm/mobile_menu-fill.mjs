export const name="mobile_menu-fill";
export const id="dl_dc603a1850d63165d0c7";
export const url=new URL("../icons/mobile_menu-fill.svg?v=5babd2aee933796052751984e14bd214023b32bd57322968b6f4009c647d913a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
