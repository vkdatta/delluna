export const name="wifi_device-fill";
export const id="dl_2afd414d0c4908e31fc0";
export const url=new URL("../icons/wifi_device-fill.svg?v=5e951ba59743b4dc9baae78a58f6b36c2699549cf662979a2bbcacdbcca8dea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
