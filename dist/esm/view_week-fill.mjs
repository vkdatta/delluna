export const name="view_week-fill";
export const id="dl_1c30de0efc8c97c4b9ac";
export const url=new URL("../icons/view_week-fill.svg?v=f418b13916d8be02300131613aa758708587afb74ae4415cfbf8a402d722ec89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
