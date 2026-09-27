export const name="data_exploration-fill";
export const id="dl_9c9d93d5aaf821468773";
export const url=new URL("../icons/data_exploration-fill.svg?v=521f2f02d42a7c4a2a225db8f5f2250f619a4fe1f97281a1526de8b7d6b0dad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
