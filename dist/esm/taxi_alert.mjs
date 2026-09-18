export const name="taxi_alert";
export const id="dl_013f9daf3f3d4a5ca4de";
export const url=new URL("../icons/T/taxi_alert.svg?v=f3e8782f7774c43d9c5637215a577b2f8e51e87a266a42db5397df606c8a5a37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
