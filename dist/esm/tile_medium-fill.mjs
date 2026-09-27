export const name="tile_medium-fill";
export const id="dl_a990320347bc60bc5148";
export const url=new URL("../icons/tile_medium-fill.svg?v=b3602461462451c41ea635c3031366b4a976fbb052cbb12db0ab9f715bd81a09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
