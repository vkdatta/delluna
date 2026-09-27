export const name="devices-bold";
export const id="dl_4079742735a642f685fc";
export const url=new URL("../icons/devices-bold.svg?v=71a2da2acbb45a67f2f091138232b2a93b20beeaae249da533584319b674bb69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
