export const name="record";
export const id="dl_dbbb89ceda224bd7ae43";
export const url=new URL("../icons/record.svg?v=f247cd5e73be5358a1aa4aee603557a5f5fbb3ff15d286defb485bb0f0cc6ed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
