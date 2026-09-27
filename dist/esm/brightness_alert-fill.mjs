export const name="brightness_alert-fill";
export const id="dl_bd045de88bcc13e130bf";
export const url=new URL("../icons/brightness_alert-fill.svg?v=f01b5a68f6aba82c1f9d313c4fce36023c176b0f4129096cd56fcb985252ef28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
