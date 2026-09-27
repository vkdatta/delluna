export const name="brightness_3";
export const id="dl_82f3db1e578b56b52b28";
export const url=new URL("../icons/brightness_3.svg?v=9fe126c406572430a81f2922acb558aab7544accca665c25f5430dbd0a06bc1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
