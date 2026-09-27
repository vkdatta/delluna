export const name="chess_knight";
export const id="dl_c6ed1a09c421b74a48e1";
export const url=new URL("../icons/chess_knight.svg?v=539e9fdcebdbedd3ee115e17fac9fc069c236e90aa62bf00dda6cf7f73c8e4ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
