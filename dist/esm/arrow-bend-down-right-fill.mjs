export const name="arrow-bend-down-right-fill";
export const id="dl_9c1471764efa4f92b53e";
export const url=new URL("../icons/arrow-bend-down-right-fill.svg?v=38e8af9c3e65556f14bec227539fb2a24c0a21e1e5d2a360f54da6af5f96f059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
