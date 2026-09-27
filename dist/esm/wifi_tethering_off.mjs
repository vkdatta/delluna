export const name="wifi_tethering_off";
export const id="dl_1e74a9c2a8a39fdec305";
export const url=new URL("../icons/wifi_tethering_off.svg?v=ab7499be3c84308ae519ab7051d45936d89def628a980724cba3ac14d6a2a07c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
