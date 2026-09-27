export const name="falling-fill";
export const id="dl_fa545ac4a8a0e578702b";
export const url=new URL("../icons/falling-fill.svg?v=59e83d50b3e579cebe94a6d04dd233a3dbff4c06be5d8d298a65557a13d03aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
