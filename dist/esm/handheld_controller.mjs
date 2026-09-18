export const name="handheld_controller";
export const id="dl_6e12696126e840268e09";
export const url=new URL("../icons/handheld_controller.svg?v=3360695edd3e3061cc4f1663b2861ad911fd89b7e98109288636b0c47e33b93d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
