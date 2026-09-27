export const name="wifi_lock-fill";
export const id="dl_489ba1891b9067b26fd2";
export const url=new URL("../icons/wifi_lock-fill.svg?v=47cf0dbc105893f0cecf74196ffb80edc78a855e1d83f324fb27fa89b869893b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
