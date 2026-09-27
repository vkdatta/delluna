export const name="ambulance-duotone";
export const id="dl_9b9d0980b9a84559916e";
export const url=new URL("../icons/ambulance-duotone.svg?v=b3aae6496df726853e846edb9b993707701dc2e37e87b477ae07d94bcdb89e5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
