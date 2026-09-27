export const name="lucid_1-card-sim";
export const id="dl_97e83d2f4e424120bdc8";
export const url=new URL("../icons/lucid_1-card-sim.svg?v=5fd96af757648df9b8dfc0b8c65ca30020ea6d8bb0170aaf73ac0750ef350cb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
