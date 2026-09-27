export const name="user-square-light";
export const id="dl_206826df0936a2c1198d";
export const url=new URL("../icons/user-square-light.svg?v=bd7514119c34ededb1fc86c928f418c8c416fdb9ea42200aec7421e88f386e90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
