export const name="clock_loader_10";
export const id="dl_bfe2497ccfc576705d31";
export const url=new URL("../icons/clock_loader_10.svg?v=2888b03f82a76c94eca7a88b9246169cca778b171d3b05975a640da8815830ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
