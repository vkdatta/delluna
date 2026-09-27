export const name="device-mobile-camera-thin";
export const id="dl_98d72e38fa0d49428506";
export const url=new URL("../icons/device-mobile-camera-thin.svg?v=451404af4db78effa2e770c621347dc8c1525b18902a4a73476b26a8751b4ebb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
