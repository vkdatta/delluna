export const name="rear_camera-fill";
export const id="dl_3db7974a9a08aaca5e19";
export const url=new URL("../icons/rear_camera-fill.svg?v=eae6d9fbf394fda5b959fee48ed166f0615fbb1ca2130dd624b24c47fa183918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
