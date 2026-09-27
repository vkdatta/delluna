export const name="network_wifi_3_bar_locked-fill";
export const id="dl_460e8e6ff1ce68a30a01";
export const url=new URL("../icons/network_wifi_3_bar_locked-fill.svg?v=3f3944d0793c18a6c2a34e02a517418a711bbd1d5b0472c52aef489a0c84786a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
