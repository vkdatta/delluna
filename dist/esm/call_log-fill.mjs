export const name="call_log-fill";
export const id="dl_1f9e46264e0f733ec5c6";
export const url=new URL("../icons/call_log-fill.svg?v=bbb9c0fb155c48652f99f67fcb10c385c8afe4c30394cd6d9a7eafb78aa96f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
