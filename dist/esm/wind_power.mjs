export const name="wind_power";
export const id="dl_8e7ab4d9f8b292eb51e5";
export const url=new URL("../icons/wind_power.svg?v=76ba1054b9001a1e50dadca5c8f868c9c18d3f73d2a190752a8192e5cb15c18b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
