export const name="partly_cloudy_night";
export const id="dl_1fbc022e877cf52b363d";
export const url=new URL("../icons/partly_cloudy_night.svg?v=e134476ce8f7351f03e10de81e07f235113d66b3d0c8183296a09d58ec155283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
