export const name="media_bluetooth_off-fill";
export const id="dl_7bb62e697b9c903ea060";
export const url=new URL("../icons/media_bluetooth_off-fill.svg?v=d463ffac17a00e8c0d8b8e962def8ff26bc764df040a543687dee3cacdf1d8b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
