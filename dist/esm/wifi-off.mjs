export const name="wifi-off";
export const id="dl_12da83f3c3df4d69ae2e";
export const url=new URL("../icons/wifi-off.svg?v=5bacf1383ad015a82a57232a207c6cba2aa9bcc40648eee1c564b00d2ef3dd75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
