export const name="phone_paused-fill";
export const id="dl_81752966b10f0712a940";
export const url=new URL("../icons/phone_paused-fill.svg?v=278d8ffa9afafce894b5d81f2dce4b1c91eeecbe3386a6f4117bf793dbcd691a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
