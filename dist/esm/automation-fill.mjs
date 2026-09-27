export const name="automation-fill";
export const id="dl_797ed44268f8d732fb07";
export const url=new URL("../icons/automation-fill.svg?v=7a382ab93a14b84389829475acefaeebf9c7032e0c6c219dac30f0261661fe3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
