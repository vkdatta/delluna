export const name="nest_wifi_pro-fill";
export const id="dl_29a2148e3c36e7e26001";
export const url=new URL("../icons/nest_wifi_pro-fill.svg?v=8d22b59bd2d7092478fc3381d332b4aaab092bed3cad9e5ba4c50268890e7012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
