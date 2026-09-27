export const name="tire-bold";
export const id="dl_69000fd3112fa228094d";
export const url=new URL("../icons/tire-bold.svg?v=db0b43988bfbc2bd7e21bd46155485fc59e3f0aa50b5caa946b2f4159e793e25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
