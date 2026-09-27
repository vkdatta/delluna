export const name="thermostat_arrow_down-fill";
export const id="dl_6df74aa6d03f4f5de6e8";
export const url=new URL("../icons/thermostat_arrow_down-fill.svg?v=d0efe066c6c6a16dbc1918a1f7a90174b87baee00db39093f75876117bdcb9cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
