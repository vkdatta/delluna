export const name="arrows-in-light";
export const id="dl_1b940b34dde1457a8463";
export const url=new URL("../icons/arrows-in-light.svg?v=a160060ee99d8025207fbebfdd1c154c399fb8da89976023fe5345b052282562",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
