export const name="call_to_action-fill";
export const id="dl_0e4e0563f00f5e66ab45";
export const url=new URL("../icons/call_to_action-fill.svg?v=017d507eccd90e7135aac71d1a5378f717cc457134e97253351b84c6b2216178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
