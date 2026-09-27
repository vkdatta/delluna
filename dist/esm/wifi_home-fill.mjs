export const name="wifi_home-fill";
export const id="dl_ee44e53464d9b297d8c3";
export const url=new URL("../icons/wifi_home-fill.svg?v=627068b4c81572d26b10b936890744a808a29a5486ece15c567232f6c68f86a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
