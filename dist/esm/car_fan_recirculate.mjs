export const name="car_fan_recirculate";
export const id="dl_014565a62b259e0ff8b8";
export const url=new URL("../icons/car_fan_recirculate.svg?v=3faa08db72baf546debaa86c4f7dca549f9af4ba1bb0c056aec253504cb8bb4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
