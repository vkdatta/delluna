export const name="wifi_device-fill";
export const id="dl_8ed1341fb433cc431304";
export const url=new URL("../icons/wifi_device-fill.svg?v=7c4eeff7be58e40e58b3585995a8217ca28d9636dfa17a6a7aecb91578b09769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
