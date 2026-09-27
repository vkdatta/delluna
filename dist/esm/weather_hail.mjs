export const name="weather_hail";
export const id="dl_03d837afc082fe78853b";
export const url=new URL("../icons/weather_hail.svg?v=4bc4b2da10c6e501c30012b85b85c17e6d1609d8ece58864865eaa35c4321063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
