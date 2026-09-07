export const name="battery-plus-thin";
export const id="dl_9223cd2566bb49a49433";
export const url=new URL("../icons/battery-plus-thin.svg?v=d6694888cc7b18ca3d01885ebfaa21dc075a5b5e3ac340e11ee8bc19cde68adb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
