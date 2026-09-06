export const name="users-round";
export const id="dl_8cc5642fc95d40c1afb7";
export const url=new URL("../icons/users-round.svg?v=96f2a45725448a4dbbaa4285da5883bdaabe1f732ca0db99c810cdd38d09edfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
