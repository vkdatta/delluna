export const name="thermostat_carbon";
export const id="dl_92d23bb465d705c7ed99";
export const url=new URL("../icons/thermostat_carbon.svg?v=56f409f35ae2d74bea8803aa04f59ce940313d900fd4e97501a02e8abb94c536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
