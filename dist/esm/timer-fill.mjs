export const name="timer-fill";
export const id="dl_5c21fb5d86f561d4be1f";
export const url=new URL("../icons/timer-fill.svg?v=64944af640961cb95f963a64b20363b9dae0ce061ae752cac899bca08382cf48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
