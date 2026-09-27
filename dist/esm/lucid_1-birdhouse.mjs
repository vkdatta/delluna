export const name="lucid_1-birdhouse";
export const id="dl_b7b5dab27f1345a5a0ee";
export const url=new URL("../icons/lucid_1-birdhouse.svg?v=2428a0f373e412da297110aa67bbb127256d5860e5bbc91a20785ff2dc1f59a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
