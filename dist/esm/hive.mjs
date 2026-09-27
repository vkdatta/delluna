export const name="hive";
export const id="dl_40a289da4a6c6fe7cb27";
export const url=new URL("../icons/hive.svg?v=a67296091c61bc6f5320fc0fcd1e6bef0aebb8caf0796b30335717c4d3e397de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
