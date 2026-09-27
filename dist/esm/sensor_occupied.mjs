export const name="sensor_occupied";
export const id="dl_539d9e36abebc3c8bb42";
export const url=new URL("../icons/sensor_occupied.svg?v=8119737bc882842bbf3905a73df8d1a8118b57fc13718aa5b6daf34f3e4e5f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
