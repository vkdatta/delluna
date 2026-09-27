export const name="snowing_heavy-fill";
export const id="dl_128f68a3e5fbe1badf82";
export const url=new URL("../icons/snowing_heavy-fill.svg?v=99c62fba05066862b783d67dd1ae64ee09e51d59ad8d14d6e6edd34226fbb7ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
