export const name="lign-horizontal-justify-center";
export const id="dl_9a3d264dfb1142c1a62f";
export const url=new URL("../icons/lign-horizontal-justify-center.svg?v=0500914d851e1374a53202d6f0b5c951d00e50d74ba8fc8b874aab72cff6393b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
