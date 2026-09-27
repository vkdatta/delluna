export const name="robot-duotone";
export const id="dl_8dc2929b654441cab6d3";
export const url=new URL("../icons/robot-duotone.svg?v=2731a12f1d576fef044459f4280948a9b58ce536f33d653066a1e13b968b179d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
