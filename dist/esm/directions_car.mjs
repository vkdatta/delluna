export const name="directions_car";
export const id="dl_57f188bf33b11e4add3d";
export const url=new URL("../icons/directions_car.svg?v=91874b8123ede3935c416330f9d33890f785c5fa6c7f55b4de11689a1b8fcd7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
