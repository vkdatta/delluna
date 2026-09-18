export const name="medical_services";
export const id="dl_30d29daae3064a3a9c93";
export const url=new URL("../icons/M/medical_services.svg?v=fc7cf084a340af471f842c1b27f02922718b157c6e06af41c82182698517faa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
