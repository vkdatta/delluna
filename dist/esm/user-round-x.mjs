export const name="user-round-x";
export const id="dl_c8c612b1942f4e649a8d";
export const url=new URL("../icons/user-round-x.svg?v=7428534993c6459f080b46c34cf45670bd1d86e6303ca923698ed25caaaae0cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
