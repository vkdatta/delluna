export const name="lucid_3-spline-pointer";
export const id="dl_ae0a0e04c6674fdfa19a";
export const url=new URL("../icons/lucid_3-spline-pointer.svg?v=12beb303da7942ef3392ae152034fae07697c08fb66a318165fdaab7eb42fe20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
