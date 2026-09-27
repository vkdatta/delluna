export const name="map-pin-simple-line-bold";
export const id="dl_b7b2a795b9074c368d4a";
export const url=new URL("../icons/map-pin-simple-line-bold.svg?v=1d725e47ea96e960360d0911314c26ae9af21461fe6d0515758a43c04fca087e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
