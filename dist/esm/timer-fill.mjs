export const name="timer-fill";
export const id="dl_66b01b7ffd9e46bfb53a";
export const url=new URL("../icons/T/timer-fill.svg?v=6cd85224477ca070b3a97b44ed3da8dc8e39c9fd76c529a69852e0abd352ce12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
