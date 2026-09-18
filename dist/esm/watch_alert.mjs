export const name="watch_alert";
export const id="dl_0741bbb864db496aadc0";
export const url=new URL("../icons/W/watch_alert.svg?v=064c125bab1feef6d2476c90ffb57da88db15f55873f738090363fbed4696f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
