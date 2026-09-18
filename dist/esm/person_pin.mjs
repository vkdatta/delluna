export const name="person_pin";
export const id="dl_9da00237ea514dd4b789";
export const url=new URL("../icons/person_pin.svg?v=f111eff0c97ba560ab2998092546b2c5f7d80aef1f9ced356bac71db4e5ebadd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
