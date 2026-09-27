export const name="detector_smoke";
export const id="dl_296571a1afab7b1693db";
export const url=new URL("../icons/detector_smoke.svg?v=1106efc2e7666e43e9dc2cda41b3ce900c0b7948362cf0ec8c227d97de293fcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
