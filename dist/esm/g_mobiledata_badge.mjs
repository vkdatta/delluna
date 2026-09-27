export const name="g_mobiledata_badge";
export const id="dl_9ac05641d3525d00c7ef";
export const url=new URL("../icons/g_mobiledata_badge.svg?v=966c8d6e2d6ad2d4569a6af73911521eaa9dd87ffcd5907d2953ac6a114cea61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
