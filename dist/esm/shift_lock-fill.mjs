export const name="shift_lock-fill";
export const id="dl_e58e1b87cd6c60a1967f";
export const url=new URL("../icons/shift_lock-fill.svg?v=18e332b273a20fbed0a684b5dd8b1f7812d8d501ac4d18f36b9874ef9c9ee708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
