export const name="battery-medium-light";
export const id="dl_0ba70f789fc24d81b2db";
export const url=new URL("../icons/battery-medium-light.svg?v=1d46b29948c7c944a636af916a114bf99dfdfc7f698adabe2fa60d2940ae89e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
