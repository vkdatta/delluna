export const name="shutter_speed_minus";
export const id="dl_2aea5a6378984f14b0ce";
export const url=new URL("../icons/S/shutter_speed_minus.svg?v=a8d6b69ee6757429a2f8099deacd2f6d5c3527b8551ce236ccbeb8e99b8609df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
