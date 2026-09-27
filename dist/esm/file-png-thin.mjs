export const name="file-png-thin";
export const id="dl_364a11041e684d709cff";
export const url=new URL("../icons/file-png-thin.svg?v=3903be075137043b5202274c6a90d3eb6a3693580a9fbacc34d4e5381b6b6ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
