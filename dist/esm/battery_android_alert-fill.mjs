export const name="battery_android_alert-fill";
export const id="dl_f3e12746c27e4b13bf50";
export const url=new URL("../icons/battery_android_alert-fill.svg?v=0396ed86dafba82a67af4bc0153b443d882c23e73c35735e775398f63fbb947f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
