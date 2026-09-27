export const name="gps-duotone";
export const id="dl_2182054751b24f41be4f";
export const url=new URL("../icons/gps-duotone.svg?v=4fd167c7585051df6e7569da15570482d82acc8f54262d4fefc96ffe6b16c9c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
