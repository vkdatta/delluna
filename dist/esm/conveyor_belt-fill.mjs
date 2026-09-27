export const name="conveyor_belt-fill";
export const id="dl_fe7393f2ff4f097d4535";
export const url=new URL("../icons/conveyor_belt-fill.svg?v=acc0670faedf6db9c3fda7338fc009df2602622bc9e98bfca8bacfab102e5102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
