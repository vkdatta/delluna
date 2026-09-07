export const name="shower-thin";
export const id="dl_1e655bca68e348729a3b";
export const url=new URL("../icons/S/shower-thin.svg?v=47b59a76949d60f364204937fc6642984c8b27924147610f45f75d0364dff785",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
