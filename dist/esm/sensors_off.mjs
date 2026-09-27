export const name="sensors_off";
export const id="dl_718379c7764496df002c";
export const url=new URL("../icons/material_symbols/sensors_off.svg?v=e9ad2134768298fb558fecb0ce01f7fb5ceae4290ac8bd46df74ef3ec6ea58fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
