export const name="home_and_garden";
export const id="dl_61d72e1ffd5e448f8685";
export const url=new URL("../icons/home_and_garden.svg?v=16a279860c422344dbdb2509de739292f484bf8f7418185883bbf491b52d976a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
