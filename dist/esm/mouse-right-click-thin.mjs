export const name="mouse-right-click-thin";
export const id="dl_7125743817f34276bf53";
export const url=new URL("../icons/mouse-right-click-thin.svg?v=4d2db125e828c9221effafbc40e4d5b6ad710b74a4b90715424616a69e8aee15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
