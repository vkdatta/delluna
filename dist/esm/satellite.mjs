export const name="satellite";
export const id="dl_74eb049a89ff4dc88486";
export const url=new URL("../icons/S/satellite.svg?v=42b1a2725a7d8727caf1d83513ab90ddc41f984d18600d563101735772685d87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
