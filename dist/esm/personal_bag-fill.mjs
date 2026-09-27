export const name="personal_bag-fill";
export const id="dl_cf3e5835cb4f73645d64";
export const url=new URL("../icons/personal_bag-fill.svg?v=11208eab62a5cd9b211b6678fe95c8d4f3d2c91f47d2533cab20f89fdb877fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
