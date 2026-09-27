export const name="user-focus-fill";
export const id="dl_42188eb47ee78b7f8a04";
export const url=new URL("../icons/user-focus-fill.svg?v=44a88273bbba5665ba5f28e03fe191b396073b1a65411da6feea15e5184dfbd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
