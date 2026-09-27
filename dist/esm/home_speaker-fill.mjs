export const name="home_speaker-fill";
export const id="dl_67dbf5c8326d88c12a69";
export const url=new URL("../icons/home_speaker-fill.svg?v=0b885c8e16402ced7123784cfa3179ac9735a469af29ed9639a269edd48030ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
