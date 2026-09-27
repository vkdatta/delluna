export const name="lucid_1-bike";
export const id="dl_3d2a3a2ff05f4eed8394";
export const url=new URL("../icons/lucid_1-bike.svg?v=47d283a018924ca35b6feecb9f3c6082d9b96fe07b820612bf7f2e21116312f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
