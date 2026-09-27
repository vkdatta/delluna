export const name="lucid_1-card-sim";
export const id="dl_97e83d2f4e424120bdc8";
export const url=new URL("../icons/lucid_1-card-sim.svg?v=f67dbb4f194f26d4d5f5cd90e425afc8401d63558509bd47094856734cf97d91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
