export const name="panorama_vertical-fill";
export const id="dl_28ce05755b514f1fe003";
export const url=new URL("../icons/panorama_vertical-fill.svg?v=e9182029aecdcb25e63209a6cb45eab6b87be242259ddaa08f973f1ec4ba6fdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
