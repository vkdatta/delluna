export const name="lucid_3-spline-pointer";
export const id="dl_ae0a0e04c6674fdfa19a";
export const url=new URL("../icons/lucid_3-spline-pointer.svg?v=a5b440f57e06c65f1c6eaf5d47d2644e4d22902d67903a384969ec400f5a1641",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
