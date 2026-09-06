export const name="globe-simple-x-fill";
export const id="dl_befb488d88e9481bba55";
export const url=new URL("../icons/globe-simple-x-fill.svg?v=7b3d4fa2c16bf820ac87fad235fdc5e3a782a341c7e8bbaffaa30c7f947aeb2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
