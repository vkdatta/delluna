export const name="thermostat_auto";
export const id="dl_dad7296d29474309896d";
export const url=new URL("../icons/thermostat_auto.svg?v=45aee555ff1f7b899fd2ca0087c90c9a3dc412e9221d5af62870ec1d0c6fe164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
