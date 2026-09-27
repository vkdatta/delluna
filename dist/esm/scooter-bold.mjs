export const name="scooter-bold";
export const id="dl_11c28163fce10c9364b4";
export const url=new URL("../icons/scooter-bold.svg?v=9d117216c16ebd49aa6f6ccccf4fd6505be5576bf6457b2f18aa3f051244f723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
