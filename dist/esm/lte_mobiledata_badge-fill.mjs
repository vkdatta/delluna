export const name="lte_mobiledata_badge-fill";
export const id="dl_a5ebaaecb0445f44b2f6";
export const url=new URL("../icons/lte_mobiledata_badge-fill.svg?v=be1ea5d76580ce106edac153704cb8ab4ce6691f423b83c14877516d48fe6675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
