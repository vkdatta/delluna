export const name="settings_power-fill";
export const id="dl_f8a5dc025e1431b1cb5c";
export const url=new URL("../icons/settings_power-fill.svg?v=0f2413deaedc3d8cac7fbcfd20d65d173ebca207e7df461df248bff5824ad7f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
