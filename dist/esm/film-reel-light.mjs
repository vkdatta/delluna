export const name="film-reel-light";
export const id="dl_219889ae62e648fca36e";
export const url=new URL("../icons/film-reel-light.svg?v=41e744bc9d6a6d740917a2e3acd42a29d8a54a79b412d8c28abcde619f68c94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
