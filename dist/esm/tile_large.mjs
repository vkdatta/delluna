export const name="tile_large";
export const id="dl_1b69c8c9c67efd986e75";
export const url=new URL("../icons/tile_large.svg?v=77fdfbc951e1aae26e957087eb691806f5952334abe9899c58361e95c73657d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
