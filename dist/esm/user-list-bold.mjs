export const name="user-list-bold";
export const id="dl_22f407e00ca044b294e6";
export const url=new URL("../icons/U/user-list-bold.svg?v=ad12ab6a6b985a8ca93c387b6311f4eb83bc08800ebd71edbb54ac8a9bfaf562",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
