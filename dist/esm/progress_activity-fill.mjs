export const name="progress_activity-fill";
export const id="dl_45ff99234fa544f9ae46";
export const url=new URL("../icons/P/progress_activity-fill.svg?v=fb3213b31218f8e31b42339634dea393403e325bd39196e8141703949aca7511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
