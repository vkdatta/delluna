export const name="file-css-fill";
export const id="dl_c3c0759d69134b7e98c4";
export const url=new URL("../icons/file-css-fill.svg?v=f4011df8e270b398294a8e4dcbddcdf60696ff609396a6b4845286c94e2d444b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
