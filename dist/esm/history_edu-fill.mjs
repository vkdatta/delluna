export const name="history_edu-fill";
export const id="dl_7bb687d9ddf1874a9eb7";
export const url=new URL("../icons/history_edu-fill.svg?v=200b9d3f1292f69ceb4344585455957fb0b8c53c75d569f3efb67b23aa1768e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
