export const name="sensors-fill";
export const id="dl_073a1d210bd25372e0f0";
export const url=new URL("../icons/sensors-fill.svg?v=27dfed616ad85d3c797b1520e146f660e09dd14c73960dc64671db5712ee7737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
