export const name="thermometer_alert";
export const id="dl_15f28f3d16c1fadb502f";
export const url=new URL("../icons/thermometer_alert.svg?v=c3a9e039e2d5633a8dc51e4aeeca4fab6b0917465429d1edbfec5f36a60b7c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
