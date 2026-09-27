export const name="change_history";
export const id="dl_3732382398c1dbbed5f7";
export const url=new URL("../icons/change_history.svg?v=0709bf462f4ea098c01cc8e4a0a05c426a70a903aed1608cd265ae3d1a30d420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
