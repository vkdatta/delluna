export const name="videogame_asset-fill";
export const id="dl_0ed2bbaa9479b2124997";
export const url=new URL("../icons/videogame_asset-fill.svg?v=bdb1348231bbf32a984752461ba508e83d09ca561227b6437ddeed1302b3d67e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
