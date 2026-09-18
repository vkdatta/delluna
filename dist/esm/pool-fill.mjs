export const name="pool-fill";
export const id="dl_e19440c95d154a189886";
export const url=new URL("../icons/P/pool-fill.svg?v=0f971b8be051db5dbf531e94ef4e8c90d1ef8752992b03dbcb56a79b53fbdd9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
