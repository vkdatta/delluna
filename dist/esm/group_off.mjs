export const name="group_off";
export const id="dl_72f3ed9c133759b0fd7b";
export const url=new URL("../icons/group_off.svg?v=796d6f30443fa38d2ec04ee62875317468d36ad7f13caf8c239f4d515cb5b6aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
