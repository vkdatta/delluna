export const name="airline_stops-fill";
export const id="dl_5a1aa30417babcda9b46";
export const url=new URL("../icons/airline_stops-fill.svg?v=c6b8bc50ca1ba600847f60350e8f16c23789520afc6664252f07da2725e86083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
