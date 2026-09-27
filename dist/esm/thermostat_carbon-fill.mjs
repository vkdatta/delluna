export const name="thermostat_carbon-fill";
export const id="dl_bbb2245ce298f53384d2";
export const url=new URL("../icons/thermostat_carbon-fill.svg?v=2d93418eef8adb86cab2e8fb88fed0b353edab749731f8ad4e1b144a2ce62d2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
