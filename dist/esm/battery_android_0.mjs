export const name="battery_android_0";
export const id="dl_c3b7144c5aa3036bb039";
export const url=new URL("../icons/battery_android_0.svg?v=3590b43a36d072b6de7661a635a68e902cc65b113f57d46c08e6328a8314928d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
