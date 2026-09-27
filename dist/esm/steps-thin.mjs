export const name="steps-thin";
export const id="dl_6f4e9861fec2ffc720f9";
export const url=new URL("../icons/steps-thin.svg?v=5468e31d42dbeb8c2e7304aca385a0840860a809dc3d727c5dd1498efa1b7309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
