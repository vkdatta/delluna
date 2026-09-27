export const name="thermostat_auto";
export const id="dl_0ce4e52d84dbc98e24fb";
export const url=new URL("../icons/thermostat_auto.svg?v=21ca3693977102637acc4a36bb03745e0a8f9103a82e47013a4e2db6dc249c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
