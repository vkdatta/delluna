export const name="weather_hail-fill";
export const id="dl_7f113d788447b4b7b3f2";
export const url=new URL("../icons/weather_hail-fill.svg?v=edf444363eac709175c090cf89dc501a9802ed5945bb76ecd5d0ba28d92cfcea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
