export const name="cloud-fog-duotone";
export const id="dl_a42739cf8228451a87ad";
export const url=new URL("../icons/cloud-fog-duotone.svg?v=9ef18b9223ce149b0b16cb4834d27471bc354824299a1f5ac88c1fed2b7900b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
