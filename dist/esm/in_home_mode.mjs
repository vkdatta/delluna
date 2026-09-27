export const name="in_home_mode";
export const id="dl_55683066ec0fa0e211d9";
export const url=new URL("../icons/in_home_mode.svg?v=ca393a090bc3b3d7aa64356caa3e91c17737f46a4ee54a551640742c4e66ec09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
