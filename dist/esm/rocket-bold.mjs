export const name="rocket-bold";
export const id="dl_2993f2e0f515442dbce8";
export const url=new URL("../icons/rocket-bold.svg?v=948a5f4b334440cdb0e3f38b4cc8bbe2a9a959f602e254881ad966eb1b256485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
