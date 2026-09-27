export const name="apple-logo-duotone";
export const id="dl_a8db04985b6f44b8b2b8";
export const url=new URL("../icons/apple-logo-duotone.svg?v=7b11d77ca576304e9abf49dffb8ba3d5a10590b1d6b2b00f66a8d11051b3274c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
