export const name="lucid_3-spline-pointer";
export const id="dl_ae0a0e04c6674fdfa19a";
export const url=new URL("../icons/lucid_3-spline-pointer.svg?v=c402c2e52a3ed74f0b0a1e6669c90e52fd3e626f5c415bc8d1e74974fc3e70f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
