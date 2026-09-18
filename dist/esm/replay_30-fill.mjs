export const name="replay_30-fill";
export const id="dl_635180598fd44111a19a";
export const url=new URL("../icons/replay_30-fill.svg?v=1e2b7c889f4fa9b613b915535bd34e39b55faa41e1916534402db69664854c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
