export const name="blood_pressure";
export const id="dl_e01602424ea67d70af45";
export const url=new URL("../icons/blood_pressure.svg?v=4ee11fd63113223c9a76945662c549e6967dff805c0ebff2a21ffc8b7251aa99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
