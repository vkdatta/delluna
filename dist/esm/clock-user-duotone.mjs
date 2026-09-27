export const name="clock-user-duotone";
export const id="dl_02ab6ea441bb4ba18134";
export const url=new URL("../icons/clock-user-duotone.svg?v=1d1017ce9a2b5de49f7fb1fa2348f3a009cea7b80afb244089bc3bce09a61a5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
