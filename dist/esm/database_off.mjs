export const name="database_off";
export const id="dl_5410c3af7812497c921d";
export const url=new URL("../icons/database_off.svg?v=0e1c1a134a73dcfe2d98ab7091f79e8d947fcd04ff834187ae1476391020b80b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
