export const name="network_wifi_1_bar_locked";
export const id="dl_4ef20c83a701fcc45d30";
export const url=new URL("../icons/network_wifi_1_bar_locked.svg?v=ae075b38b108a13670f5664246ac5cbc8f6409fdab76a23eb78869fb7508c61c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
