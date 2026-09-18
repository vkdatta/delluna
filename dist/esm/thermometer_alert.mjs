export const name="thermometer_alert";
export const id="dl_064c49b0ef69439a8d2b";
export const url=new URL("../icons/T/thermometer_alert.svg?v=b2351668fb1cd56f74c8c99c7948f9dadad4899075d0e646c6b9fb42831df6d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
