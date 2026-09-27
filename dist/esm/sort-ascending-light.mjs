export const name="sort-ascending-light";
export const id="dl_d6af42b7dc9b19298309";
export const url=new URL("../icons/sort-ascending-light.svg?v=33c51d4160e618f18d1e954b4d21785456fdfac528a3c6c0a9a9db1cab292a7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
