export const name="night_sight_auto_off-fill";
export const id="dl_e187d4ac91724044aa3c";
export const url=new URL("../icons/night_sight_auto_off-fill.svg?v=f3fe91e28f8e8712c33d0000b6c8ce5f30caeb2bc33847052604004fa0928829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
