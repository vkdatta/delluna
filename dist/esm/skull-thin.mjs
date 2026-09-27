export const name="skull-thin";
export const id="dl_a84e5f5b935ddecf9323";
export const url=new URL("../icons/skull-thin.svg?v=69c4e983c07a2c6d93da38a45bbe028a45322b04f8bca9d093d7942c2d93e852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
