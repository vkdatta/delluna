export const name="deck";
export const id="dl_65deedb66eb78ea1a26b";
export const url=new URL("../icons/deck.svg?v=3b9c28c03d4b2b6166e4851e3ef194dd23479c56d2c94bd8b032823e3d655eb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
