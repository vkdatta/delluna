export const name="network_wifi_locked-fill";
export const id="dl_f52cd4ed707842df8a52";
export const url=new URL("../icons/N/network_wifi_locked-fill.svg?v=18acebbdc49f74b894f813722bf145963e50898f135bda10f0999e7b787818ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
