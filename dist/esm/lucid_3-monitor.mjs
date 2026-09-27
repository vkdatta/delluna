export const name="lucid_3-monitor";
export const id="dl_48a6215e92344d998e13";
export const url=new URL("../icons/lucid_3-monitor.svg?v=b0dc290c8733dd496d11eaf621d0ee499bf4eb48c487c85a81ad13df7d70317b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
