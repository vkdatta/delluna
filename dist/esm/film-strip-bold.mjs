export const name="film-strip-bold";
export const id="dl_ae7ae4335bf145769703";
export const url=new URL("../icons/film-strip-bold.svg?v=588eca12fc1c54a3243707c9e5881c8f67b08735dad6a9393672217a20cb08e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
