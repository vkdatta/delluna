export const name="sensors_krx_off";
export const id="dl_4ee3daf508d836d043ea";
export const url=new URL("../icons/sensors_krx_off.svg?v=e2bde26b2565eb30558086d9e2e9e27fe933e6df406e0f8c4107616889fb4ebc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
