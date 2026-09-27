export const name="cards-duotone";
export const id="dl_05afc6e139e246af8d14";
export const url=new URL("../icons/cards-duotone.svg?v=3668c4ec6c3d97668e999d609d102d7489033452451e351d59fea5471cce2764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
