export const name="add_to_drive-fill";
export const id="dl_730cbb105a9646a096a8";
export const url=new URL("../icons/A/add_to_drive-fill.svg?v=1a81fc24bcfaff66075638b0a6c76f2fe05070a6f9331983d117f71fd3c335e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
