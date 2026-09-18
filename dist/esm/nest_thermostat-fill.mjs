export const name="nest_thermostat-fill";
export const id="dl_ccbb91b873f4462f9ec7";
export const url=new URL("../icons/nest_thermostat-fill.svg?v=26a60c2144c05cfe00473df755a6bf57a15659cab84a2d8d63994ac11e224b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
