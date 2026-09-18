export const name="library_add_check-fill";
export const id="dl_d9c1c3c0d1cc4c0198c6";
export const url=new URL("../icons/L/library_add_check-fill.svg?v=47bef2f84337fe8798d023b262e739593ce1473dca81642b8aa52fb3f0db34d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
