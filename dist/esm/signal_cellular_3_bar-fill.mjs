export const name="signal_cellular_3_bar-fill";
export const id="dl_67cb140d80c53741f961";
export const url=new URL("../icons/signal_cellular_3_bar-fill.svg?v=3f12f656683d8beb6d469916f4c5c5dbd8e9f32cd376a6c7dc2c067663185036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
