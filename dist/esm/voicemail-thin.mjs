export const name="voicemail-thin";
export const id="dl_88e7e151ecdd40a18cf6";
export const url=new URL("../icons/V/voicemail-thin.svg?v=218f8d9c74d4c801fca1b052221d85dd764fab6351084f0391a493c3e0d3ead6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
