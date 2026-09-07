export const name="tag-chevron-fill";
export const id="dl_016eef9cc0ee415b865f";
export const url=new URL("../icons/T/tag-chevron-fill.svg?v=4741bcc296fb5ebefc87fd83180e2e9c40400f4643f09b05ac9aeecc29e2fa44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
