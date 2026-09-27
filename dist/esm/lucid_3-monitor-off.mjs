export const name="lucid_3-monitor-off";
export const id="dl_66f21ad6132846a38e0f";
export const url=new URL("../icons/lucid_3-monitor-off.svg?v=502d32d4e21c7deddecd4e5c59e2d40a6f93b9808c906b654795f09c990ba5e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
