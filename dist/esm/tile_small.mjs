export const name="tile_small";
export const id="dl_31a9b37cd87809bb2a31";
export const url=new URL("../icons/tile_small.svg?v=8b7cc2ebe65d7ba268c2fe66cd74ebbfeed61395a9c5fcac8e3ababc75151e8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
