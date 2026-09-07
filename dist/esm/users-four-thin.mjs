export const name="users-four-thin";
export const id="dl_e486babcf96147e98817";
export const url=new URL("../icons/U/users-four-thin.svg?v=7ce320b4e1f2a156abe96834f7c3a73a2cc40bfa3c89332fe8d1aa98f504d7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
