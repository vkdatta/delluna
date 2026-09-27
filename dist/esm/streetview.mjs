export const name="streetview";
export const id="dl_2f604b20f8206ca16de4";
export const url=new URL("../icons/streetview.svg?v=486908466fd03ca65b40e4745a6c1958bb803a21a45ec286d2e92a896b9d373e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
