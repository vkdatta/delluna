export const name="library_music-fill";
export const id="dl_025ddbb86066c32d6303";
export const url=new URL("../icons/library_music-fill.svg?v=e2468242a910c7833191b39f23b026a528b69a6cea7d498bb6af5e1d0fc66895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
