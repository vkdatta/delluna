export const name="wifi_channel-fill";
export const id="dl_bb37422e3aa1181e7411";
export const url=new URL("../icons/wifi_channel-fill.svg?v=4e4c7ecdb452e104f373af813cab943c90e94238f1c8746044ead733c0c8ec2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
