export const name="battery_android_alert-fill";
export const id="dl_94bc41740b7ffad5eab5";
export const url=new URL("../icons/battery_android_alert-fill.svg?v=899870722de121d263c096385e2d5232b6e05e288b2e64930402d55c9a78076f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
