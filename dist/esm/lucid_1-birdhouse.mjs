export const name="lucid_1-birdhouse";
export const id="dl_b7b5dab27f1345a5a0ee";
export const url=new URL("../icons/lucid_1-birdhouse.svg?v=9129ea5459b27796cb4439fea289a83af2bf97a90da5a35b2636b0af9399737e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
