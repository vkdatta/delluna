export const name="signal_cellular_pause";
export const id="dl_72019a605525ad8bbea7";
export const url=new URL("../icons/signal_cellular_pause.svg?v=822ce23772de84869021b5e1df401ad5360c3f0052f836940821f5ccab2ac5a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
