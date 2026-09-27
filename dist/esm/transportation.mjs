export const name="transportation";
export const id="dl_fde5e198c6805cb085fd";
export const url=new URL("../icons/transportation.svg?v=12d82dacabd17cb4700ef3dea6052571528b7333a2433a003e72de22cb681ad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
