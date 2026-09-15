export const name="call_missed_outgoing-fill";
export const id="dl_d109bed25a814ccc83c9";
export const url=new URL("../icons/C/call_missed_outgoing-fill.svg?v=515bfe2d6b52b8b604555a2a6f97348ee30e8a9620e09e0db2babfd72759db0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
