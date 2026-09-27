export const name="dock_to_left-fill";
export const id="dl_91224b93ed70cf107422";
export const url=new URL("../icons/dock_to_left-fill.svg?v=9f51c4f5b2e80705cf68e0ed156ef4ab9b9d4fb3c37ed01c9fd03f1aaef1580f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
