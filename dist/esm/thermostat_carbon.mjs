export const name="thermostat_carbon";
export const id="dl_2a866cbd8c7113f03807";
export const url=new URL("../icons/thermostat_carbon.svg?v=3844df279366cee8456ef7a9bb9d456362140d33e9426a833616ded5c84526a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
