export const name="nest_thermostat";
export const id="dl_b4805d3ecea9445797dc";
export const url=new URL("../icons/N/nest_thermostat.svg?v=cc90eff34fa9bb2a8b4c78478efb9d3cec4ce0cc48c659ff957a3bbff0d8cbbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
