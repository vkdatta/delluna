export const name="list-star";
export const id="dl_a49c0af66e9046388e1e";
export const url=new URL("../icons/list-star.svg?v=f2c4bad1d93a0da672ed223413a8bd208afdd594a01c0ae01176b0df370ccbe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
