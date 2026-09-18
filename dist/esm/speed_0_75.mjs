export const name="speed_0_75";
export const id="dl_c6210acd96b74e81b779";
export const url=new URL("../icons/speed_0_75.svg?v=a2e282746699de8c0eeea0f360cf9348990d31b7275017f9496c6efdc4618b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
