export const name="network_wifi_2_bar_locked-fill";
export const id="dl_eec863cb165e3dfa0413";
export const url=new URL("../icons/network_wifi_2_bar_locked-fill.svg?v=c6ac38a28ec68f181fadafd52b19d164d6d97a7c2233c7099d8927817e98285f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
