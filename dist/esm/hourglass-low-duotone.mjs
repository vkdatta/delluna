export const name="hourglass-low-duotone";
export const id="dl_4799a51885994bb5b6c4";
export const url=new URL("../icons/hourglass-low-duotone.svg?v=e15c9c380b60674022bd8f16eebf9f1c05740a896ad17e06754b9aae1d387595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
