export const name="memory";
export const id="dl_7ec224043689950aafc2";
export const url=new URL("../icons/memory.svg?v=4f1f93955a5b8a9d974b718a3e569f07af6ca190e016abdf1e9a5829e8e5f961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
