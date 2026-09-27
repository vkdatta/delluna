export const name="drone";
export const id="dl_22aab0710c054fc3adc7";
export const url=new URL("../icons/drone.svg?v=fee15a3d40a7077a83f621766d2c5513bec900b05eae685a83a15d48bc236a0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
