export const name="solar_power";
export const id="dl_1fc1c2a60f8e2c153dc7";
export const url=new URL("../icons/solar_power.svg?v=c710f3ecc6e5bf07a4a55d61bfb5435ca53527a53686dbf482efea84f9ba8f43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
