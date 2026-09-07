export const name="user-minus-bold";
export const id="dl_3aed627764324b32a6fc";
export const url=new URL("../icons/U/user-minus-bold.svg?v=71d0b0eaa82fe0c2cea086ae420e22d263e5102ff364ea2111d438e47ba0ee55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
