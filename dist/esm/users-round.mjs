export const name="users-round";
export const id="dl_8cc5642fc95d40c1afb7";
export const url=new URL("../icons/users-round.svg?v=4a21254b76cc812033706f605748b80405b79ee3d44fa6d440a4a454727e91cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
