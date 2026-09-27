export const name="gps-light";
export const id="dl_15aed3071ed34ae5b115";
export const url=new URL("../icons/gps-light.svg?v=7a1207fca3c6ec51fc923386f7433526dc2696575af94a1dedd100adb27363f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
