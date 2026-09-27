export const name="mobile_gear";
export const id="dl_6940267c878907d54141";
export const url=new URL("../icons/mobile_gear.svg?v=9aaf9e6c96bc65b1abc0c56c6f12dafd6a3aa7b7585fc37432c0902a62e60eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
