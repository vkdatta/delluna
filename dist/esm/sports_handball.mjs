export const name="sports_handball";
export const id="dl_958dc9d657fec6a0463d";
export const url=new URL("../icons/sports_handball.svg?v=a1d6cfd49e478e2fce7f2cecea81eb49e3bac910a3ef8606224fe764f32d50e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
