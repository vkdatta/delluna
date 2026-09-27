export const name="thermostat_carbon";
export const id="dl_53e927b137a7a0565251";
export const url=new URL("../icons/thermostat_carbon.svg?v=eea08b5c76c815b5b7f79421a9b74093540853269680f88b1bc4b3cd447f56b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
