export const name="airplane-taxiing-bold";
export const id="dl_62d7903f1119439aa1f4";
export const url=new URL("../icons/airplane-taxiing-bold.svg?v=ce1ea9b387529592298cd0a56c7e4ae87b9ece75cc8266a4bb191dc180607f7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
