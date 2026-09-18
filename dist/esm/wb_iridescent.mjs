export const name="wb_iridescent";
export const id="dl_b1f4db71aabe4ca683a3";
export const url=new URL("../icons/W/wb_iridescent.svg?v=8777da4b51bc26296724869ba60e1a498410fe13b03d813bbc0a64b35de122cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
