export const name="tv_displays";
export const id="dl_acfca0483c4c08b01d04";
export const url=new URL("../icons/tv_displays.svg?v=5c8529959a2ac6dcbbb26a92c7a5cd5b3995fbe1148a5c1406efd5a57ae6fb6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
