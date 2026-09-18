export const name="water_heater";
export const id="dl_03a73bc62b3b47139342";
export const url=new URL("../icons/water_heater.svg?v=cd4fcfd74a987204a1954bd9647c9a87994ea06d4b6264274cc44f29fd50cb71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
