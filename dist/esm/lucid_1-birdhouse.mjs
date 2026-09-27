export const name="lucid_1-birdhouse";
export const id="dl_b7b5dab27f1345a5a0ee";
export const url=new URL("../icons/lucid_1-birdhouse.svg?v=5eaf203be0248fadf871a4b1df7fb9bc09d98d6661558e5d84546202ac318dae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
