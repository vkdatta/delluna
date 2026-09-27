export const name="flights_and_hotels";
export const id="dl_1a97934b0216a540f9cd";
export const url=new URL("../icons/flights_and_hotels.svg?v=88a0b4056f9cf9349637e4247563541fa0869c0a76fa8d267ff7cb6f6fa43c04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
