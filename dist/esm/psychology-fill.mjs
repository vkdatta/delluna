export const name="psychology-fill";
export const id="dl_886be8f871b3bdc4f9f0";
export const url=new URL("../icons/psychology-fill.svg?v=196fb95e58a27cbdda40efe5e16c027312f508e02c85e028e38fd2fb2ceff744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
