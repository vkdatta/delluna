export const name="thermometer_alert-fill";
export const id="dl_15abe60c377ed9bb2691";
export const url=new URL("../icons/thermometer_alert-fill.svg?v=ff663f4d9dec91a65de1e928025e3f9b68dc599f91c3c3272c89b347203e4812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
