export const name="power_settings_circle";
export const id="dl_80296bf731cdea9475f2";
export const url=new URL("../icons/power_settings_circle.svg?v=4c6104a4cf1b8f5b51da0f664b8ebace63d929b39ef7be8616ec05b4d30471c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
