export const name="battery-warning-vertical-bold";
export const id="dl_eb7f708b91174a81b84b";
export const url=new URL("../icons/battery-warning-vertical-bold.svg?v=59e84da8eb0314de96f025c346a6206728550ad4c0107755b9532dfe9bbe63ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
