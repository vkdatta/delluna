export const name="tibia-fill";
export const id="dl_eb4741efd0384a8cbdff";
export const url=new URL("../icons/tibia-fill.svg?v=3ce8b0f7835aa7cf90d5c31e7837473a1255a48bcc08422d897b332621844a1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
