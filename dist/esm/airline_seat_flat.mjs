export const name="airline_seat_flat";
export const id="dl_949b035c988f4568a5e0";
export const url=new URL("../icons/airline_seat_flat.svg?v=fbd085084e0a2551bfd378bcfb9a328b28d9c4401137f3c581d2e1d6567ea2fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
