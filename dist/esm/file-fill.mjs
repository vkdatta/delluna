export const name="file-fill";
export const id="dl_8deec1ad0630484fa9ed";
export const url=new URL("../icons/file-fill.svg?v=2b5fcbeddee501ca550903696a6f2a0c8b5e2957c87a581b5899d4c4310cf031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
