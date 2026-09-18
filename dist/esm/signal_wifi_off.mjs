export const name="signal_wifi_off";
export const id="dl_a212d085fcdc458b9a7b";
export const url=new URL("../icons/signal_wifi_off.svg?v=ce5013e6ace2c93701eab85394dc9432dd275a291aae6d98a5c28c77a80eea24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
