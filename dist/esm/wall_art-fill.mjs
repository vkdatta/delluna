export const name="wall_art-fill";
export const id="dl_63a6509d08b2a6d72154";
export const url=new URL("../icons/wall_art-fill.svg?v=032b84f52c04521117202255035a581a5d7718ac13abb1990df32bfc7945ee9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
