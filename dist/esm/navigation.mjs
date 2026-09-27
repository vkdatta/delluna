export const name="navigation";
export const id="dl_c4440e4e60781141c5b5";
export const url=new URL("../icons/navigation.svg?v=2b39045e5bdbdd9706df48305ffd970dbfe38de369a1541a28a6efb73dfc2c59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
