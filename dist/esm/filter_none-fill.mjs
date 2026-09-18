export const name="filter_none-fill";
export const id="dl_369440416b5b413fa838";
export const url=new URL("../icons/filter_none-fill.svg?v=5d0682045961bd05ff5c8720eb6d403c2e4737392b55a955a262a313acec0f10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
