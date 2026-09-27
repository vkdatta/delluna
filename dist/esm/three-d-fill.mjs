export const name="three-d-fill";
export const id="dl_62b6117b6585f9ac4e51";
export const url=new URL("../icons/three-d-fill.svg?v=537cbc7b7c129910ceca4a1b1218adfbc4b7a52619f41a4be7078b81d170d4c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
