export const name="vpn_key_alert";
export const id="dl_7ef787a7aa6448c6b092";
export const url=new URL("../icons/vpn_key_alert.svg?v=1833b10625520d993e6e6ce61ab939b71045582e1d9886ffd857274c97d35d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
