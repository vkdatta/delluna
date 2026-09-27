export const name="network_wifi_1_bar_locked";
export const id="dl_a0d940436dc379df7616";
export const url=new URL("../icons/network_wifi_1_bar_locked.svg?v=f4a1e2a71d4c3d5bdc1bed2a9a0ca6918025c7304025b6b267db9574553783b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
