export const name="design_services-fill";
export const id="dl_c594d686cfe509392755";
export const url=new URL("../icons/design_services-fill.svg?v=6d57cc0e98e7f0e5500ac24d1d1e4961d4406ac02c7c6ba7a3deb91f1252b12d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
