export const name="stockpot";
export const id="dl_34fc5d8492d8bdceb78a";
export const url=new URL("../icons/stockpot.svg?v=59fd643ae50832f0c5adaeba2903682daaf99c8ebdf433335680f023a007db76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
