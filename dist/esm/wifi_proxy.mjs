export const name="wifi_proxy";
export const id="dl_2a278e031133448dbb16";
export const url=new URL("../icons/W/wifi_proxy.svg?v=8f3c0d705ff2c8f8a2b7b5dbd6df9b4c364d582809eee4298718ab6c671f76ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
