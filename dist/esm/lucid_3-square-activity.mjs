export const name="lucid_3-square-activity";
export const id="dl_ef25e6a85e1b47d78712";
export const url=new URL("../icons/lucid_3-square-activity.svg?v=97ac142212e2f3142664e7ce551a81d562380dd57a9244e1fad16ca1bb40a416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
