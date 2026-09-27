export const name="chip_extraction-fill";
export const id="dl_47ad5d4aed8f164aafc4";
export const url=new URL("../icons/chip_extraction-fill.svg?v=ca0fd758a019f465ab2747d65b5a2b03847ecd8fa9cc3231590094a30e15537a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
