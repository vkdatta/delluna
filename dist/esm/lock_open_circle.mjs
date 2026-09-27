export const name="lock_open_circle";
export const id="dl_f815bb33942719f72559";
export const url=new URL("../icons/lock_open_circle.svg?v=da803c2533b45f18cc54bf634f38aae14d35165fb32beca55bf4761e5e0656ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
