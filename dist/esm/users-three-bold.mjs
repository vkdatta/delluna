export const name="users-three-bold";
export const id="dl_0f6b5c6bf34dea39d43e";
export const url=new URL("../icons/users-three-bold.svg?v=295fe82b2f3eba77fd990d293651fb9bc4766019b3123554025d27a2da7c65f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
