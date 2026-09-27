export const name="phone_bluetooth_speaker";
export const id="dl_21bd5eec69a051409832";
export const url=new URL("../icons/phone_bluetooth_speaker.svg?v=5e981ab798d7c7d2e86e7d77ac695098e4636fb47d8335cc7d93417248633c2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
