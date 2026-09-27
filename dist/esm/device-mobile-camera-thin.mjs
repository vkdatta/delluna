export const name="device-mobile-camera-thin";
export const id="dl_98d72e38fa0d49428506";
export const url=new URL("../icons/device-mobile-camera-thin.svg?v=69dea339f7452a56c8ad5ef1d903e5109a6b9b698331f36dfb84f011c3a45324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
