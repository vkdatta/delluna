export const name="bike_scooter-fill";
export const id="dl_29dbaa7f0b4c9ca7d097";
export const url=new URL("../icons/bike_scooter-fill.svg?v=e2efd319dc314a9dc6810eedc16ab45bfe61a929d3d987638250189a9be596ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
