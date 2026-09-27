export const name="text-align-right";
export const id="dl_e14575a8f9d8c02d1312";
export const url=new URL("../icons/text-align-right.svg?v=316a925b428c67dabf0ecb0acc67aea53340f296cc45538004370f3ab8553219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
