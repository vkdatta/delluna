export const name="trolley_cable_car";
export const id="dl_e3c78bef82144587a37a";
export const url=new URL("../icons/trolley_cable_car.svg?v=d4a92235e056d3e8aa4a38a04ef3ef88e847de195b847d349cbcd67664dc935a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
