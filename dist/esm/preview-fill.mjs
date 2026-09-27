export const name="preview-fill";
export const id="dl_f469b232195df66c231a";
export const url=new URL("../icons/preview-fill.svg?v=64b8cf4fa59e960e9a54e037092abba0c8eb303ae8c350d25c131fbcd69aa8df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
