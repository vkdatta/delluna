export const name="data_usage-fill";
export const id="dl_2c790aa5c46e42198a2e";
export const url=new URL("../icons/D/data_usage-fill.svg?v=01e9ac30c924e7a507b7b13e7731e8c978ffc84d7c8818419d31ed170476b90c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
