export const name="devices_fold-fill";
export const id="dl_c919a00330b04c47a813";
export const url=new URL("../icons/D/devices_fold-fill.svg?v=28df51582db2cb862dabc4afc42313f4617d9a5d7ed7c4669501e59153aab095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
