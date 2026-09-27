export const name="mountain_steam-fill";
export const id="dl_8835b6f49152f79f494d";
export const url=new URL("../icons/mountain_steam-fill.svg?v=a1f8cafaae23e151a8f5af8a55b92c36462753bfcd34516ed94edfb801196bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
