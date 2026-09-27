export const name="manage_history-fill";
export const id="dl_1ee116ed4b8e0cb1526c";
export const url=new URL("../icons/manage_history-fill.svg?v=9b60ed9638a255b52c9c2cb81c226ac5b3c9ab5ea4599f522056f67790a65ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
