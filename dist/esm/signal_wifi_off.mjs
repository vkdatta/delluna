export const name="signal_wifi_off";
export const id="dl_22d0c2f14461a593a186";
export const url=new URL("../icons/signal_wifi_off.svg?v=2078b2063b038b8cb333e185b892b856b83fa8e4036bf47aff0d71c64e785557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
