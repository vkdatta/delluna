export const name="workspaces-fill";
export const id="dl_6935d307a8575e3151ee";
export const url=new URL("../icons/workspaces-fill.svg?v=9b24771b0d6273a3aa77b197995cf7d94721b7fd17cd60780ff4d7d69df0262c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
