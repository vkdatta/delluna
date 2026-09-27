export const name="user-circle-gear-light";
export const id="dl_388492287d16e2bb8199";
export const url=new URL("../icons/user-circle-gear-light.svg?v=6f0be5da2df79162437a3ae5130596f5c0772bb6f92c6e5e8d0a501c22545729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
