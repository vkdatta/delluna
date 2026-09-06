export const name="lucid_3-parking-meter";
export const id="dl_fa93366d66eb43288a8e";
export const url=new URL("../icons/lucid_3-parking-meter.svg?v=402460073c02a9b0e2d33975005ee13aebb7acf26d33e181bb2f46bdddbee2bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
