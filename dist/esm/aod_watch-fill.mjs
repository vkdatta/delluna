export const name="aod_watch-fill";
export const id="dl_ed914ebebc1d15b7bb60";
export const url=new URL("../icons/aod_watch-fill.svg?v=2ec954fd173d5bb2cb19265a57fdfa406fec3985878bddbaec62f90a3d1014b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
