export const name="all_out-fill";
export const id="dl_82dc1bd66cdd9cb2edfb";
export const url=new URL("../icons/all_out-fill.svg?v=d4e68c62695cdc9ba134fa713d5db571d02e94b4ac0e5f5f6c65d9821b76883c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
