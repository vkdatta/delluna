export const name="emergency_share_off-fill";
export const id="dl_2d1b779557dee9b06492";
export const url=new URL("../icons/emergency_share_off-fill.svg?v=5f43576b796dd2f593a458da1cf56816ebce6f6415d81b572d982588131966aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
