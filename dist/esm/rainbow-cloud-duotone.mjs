export const name="rainbow-cloud-duotone";
export const id="dl_1eb1078488fd4214be44";
export const url=new URL("../icons/rainbow-cloud-duotone.svg?v=15ef4161e58c3380a735a36eca02060b0e3cd3e28f8b21631af1ddb52bbd21a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
