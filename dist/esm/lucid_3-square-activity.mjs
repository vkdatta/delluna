export const name="lucid_3-square-activity";
export const id="dl_ef25e6a85e1b47d78712";
export const url=new URL("../icons/lucid_3-square-activity.svg?v=7147d88b23166c3f494f898df0d685918218bd68d6b88ea856d4cef3e5c3c84b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
