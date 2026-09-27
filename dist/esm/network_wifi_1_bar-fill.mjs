export const name="network_wifi_1_bar-fill";
export const id="dl_92e4284931b71f66b25b";
export const url=new URL("../icons/network_wifi_1_bar-fill.svg?v=ddf36558430b11cb760277a6b02101fb095cecab9f648745e46013ac0a4f3268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
