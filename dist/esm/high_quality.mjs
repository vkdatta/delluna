export const name="high_quality";
export const id="dl_cf8b8cbfc393ae329d26";
export const url=new URL("../icons/high_quality.svg?v=e9ae2c7099bc55860197e8c8eccaf14d9f1110eeb744135e4d461000e6dbb182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
