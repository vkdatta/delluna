export const name="number-square-seven-fill";
export const id="dl_6f2e34cdd37d4be4ae38";
export const url=new URL("../icons/number-square-seven-fill.svg?v=6cd574f65f736fa6ceb319217f8d9aedec80266a3726844d3d96f860d527e758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
