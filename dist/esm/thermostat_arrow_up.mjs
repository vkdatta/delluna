export const name="thermostat_arrow_up";
export const id="dl_dc9106f185a610931fdf";
export const url=new URL("../icons/thermostat_arrow_up.svg?v=b887b36aef9d533166186bafbfe9873ab104345e46fedfe5fe34a303500e5da7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
