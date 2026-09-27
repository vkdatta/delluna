export const name="stop-bold";
export const id="dl_895211bcce1f22145558";
export const url=new URL("../icons/stop-bold.svg?v=102cdd340ece0badfe5fc4f92348f733ee03736f30acf61f7164354232b92c42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
