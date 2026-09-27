export const name="tile_small";
export const id="dl_11c548235f32289f0a66";
export const url=new URL("../icons/tile_small.svg?v=5143c216300f595a0a88dc6d7f1f8ff6416bba025af7d313a2f2828003d7a712",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
