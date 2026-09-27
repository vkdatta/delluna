export const name="send_time_extension-fill";
export const id="dl_11979d43065ef8c6cd93";
export const url=new URL("../icons/send_time_extension-fill.svg?v=64121c3f357fda784903f1cee5980db1501a14604589810a41509d9f7704c75b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
