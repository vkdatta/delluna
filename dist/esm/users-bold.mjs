export const name="users-bold";
export const id="dl_97f46b1cab977e38a9ea";
export const url=new URL("../icons/users-bold.svg?v=668570797b94b4848ed9995cc9c447d1b3dd55c040c1bdffa49128be9ca1aec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
