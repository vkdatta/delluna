export const name="device_thermostat-fill";
export const id="dl_3c0712fa64d9f1efb02e";
export const url=new URL("../icons/device_thermostat-fill.svg?v=cb156f3c7bfa4ff2dcae366799ea55268f7cc31789580cc1e12c9b67289d9408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
