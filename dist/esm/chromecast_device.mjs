export const name="chromecast_device";
export const id="dl_93fc441a09c44d46a41d";
export const url=new URL("../icons/chromecast_device.svg?v=d2aa52d41df5c8dc676fe88a0af404888099aa4139672ab0b29c88ba02b4748e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
