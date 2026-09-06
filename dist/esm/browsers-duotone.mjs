export const name="browsers-duotone";
export const id="dl_845eacb89a9749f9af90";
export const url=new URL("../icons/browsers-duotone.svg?v=3279db138c0b9799e9493dc2947dea03c048a0cef881f74db718be2bd51f3de2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
