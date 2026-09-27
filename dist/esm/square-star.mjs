export const name="square-star";
export const id="dl_da44615bf570494b89a9";
export const url=new URL("../icons/square-star.svg?v=3a714aeb449db2b1d20ca4ab9d8041c6faeff2983d65fa5705f6eaaa42fd9fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
