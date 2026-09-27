export const name="railway_alert_2";
export const id="dl_9ca969f1b4bcf03e6b91";
export const url=new URL("../icons/railway_alert_2.svg?v=ae8606e3060c0735e9cee4de6153714081c692c3c3aa66592ab7c779e2551f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
