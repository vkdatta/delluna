export const name="user-sound-duotone";
export const id="dl_45259f75a4a4bd44f0de";
export const url=new URL("../icons/user-sound-duotone.svg?v=53cb9405add8c605b3cd2bf79faf94abd057f648c071ff53903c059c3c54a41f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
