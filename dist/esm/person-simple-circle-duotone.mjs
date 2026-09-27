export const name="person-simple-circle-duotone";
export const id="dl_fa5d3d8dad3640459874";
export const url=new URL("../icons/person-simple-circle-duotone.svg?v=7bbd02bb602d3206bcae95f8a9a3c78a018871cd14dfbc8838669eed03852fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
