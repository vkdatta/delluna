export const name="genres";
export const id="dl_428458f4ae3dd8c0fc33";
export const url=new URL("../icons/genres.svg?v=c44969f29dd59c13041f567cd5c825bf027862079c072c6bd9b46191d8bff754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
