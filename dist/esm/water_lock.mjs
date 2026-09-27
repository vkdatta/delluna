export const name="water_lock";
export const id="dl_cfe2f98da755a8a15796";
export const url=new URL("../icons/water_lock.svg?v=5cafd2ad155835b0232b446cc9af78ff73648de5cad9f36f19f5b5e45ffa0544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
