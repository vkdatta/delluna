export const name="signal_cellular_pause";
export const id="dl_34cd79c838af519087ae";
export const url=new URL("../icons/signal_cellular_pause.svg?v=ca50e667dfbdaa0fb2ebac3bbc2c6f07483ff232a40a0b5795b6334e1d071a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
