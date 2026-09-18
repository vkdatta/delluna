export const name="taxi_alert-fill";
export const id="dl_8d9b5af587e944108d7b";
export const url=new URL("../icons/taxi_alert-fill.svg?v=efc2015792d8f87c4f26011e6a5858e8a8c21f3e68c1952e566e930e9a06eb23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
