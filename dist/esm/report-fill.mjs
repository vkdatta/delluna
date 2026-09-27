export const name="report-fill";
export const id="dl_2f8e5a58a0ec8998d231";
export const url=new URL("../icons/report-fill.svg?v=d2c41376799a193b4cd18fb002c2a55a173f49eb8c650b57df001f0e832320f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
