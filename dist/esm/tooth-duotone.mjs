export const name="tooth-duotone";
export const id="dl_343a85c8fc0b59fb7db9";
export const url=new URL("../icons/tooth-duotone.svg?v=1dc4bc38c000a0aaf8dc7227c527e71a7accc78c62f2d72acad3d93349c3cd85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
