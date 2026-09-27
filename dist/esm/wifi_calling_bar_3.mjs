export const name="wifi_calling_bar_3";
export const id="dl_a2ca07d8aa817dd55310";
export const url=new URL("../icons/wifi_calling_bar_3.svg?v=097dec81683fa631ed17b90cf629ab1b1fae24f005f6029bb284b395ce62656b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
