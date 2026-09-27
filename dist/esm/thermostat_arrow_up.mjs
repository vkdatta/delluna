export const name="thermostat_arrow_up";
export const id="dl_8dc23e98a49b2f3fd9f8";
export const url=new URL("../icons/thermostat_arrow_up.svg?v=47fad5d55b07f8e6b13ad3f439017879c45b9747083d3f4c3f7afc895a88d108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
