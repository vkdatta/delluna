export const name="picture-in-picture-duotone";
export const id="dl_05db70c023544e888511";
export const url=new URL("../icons/picture-in-picture-duotone.svg?v=3d876a3b6ae9acf859f10f72217f8d24bf8df7ebac6a49be7936f07d2c80e00c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
