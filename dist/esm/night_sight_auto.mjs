export const name="night_sight_auto";
export const id="dl_306085613912cdd7cbe7";
export const url=new URL("../icons/night_sight_auto.svg?v=1fe105ed3ed37d78972e7372523f21bc5fa075246d9852438d7c82fb0bc7484c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
