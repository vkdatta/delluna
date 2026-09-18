export const name="lock_open-fill";
export const id="dl_9ffd1e7cff344c50908a";
export const url=new URL("../icons/L/lock_open-fill.svg?v=0ed2acf1a1463c78ac70f09622d27e21d56675e735ed5bd2b0d1e45dcb960afa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
