export const name="lucid_3-rewind";
export const id="dl_64836b39f2124ed2b9a8";
export const url=new URL("../icons/lucid_3-rewind.svg?v=4b2fee2bd4e42121aa6f5e4402d70feaeeec1dfeb543d9d26fe3d6e4c96adc4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
