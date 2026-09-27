export const name="square-star";
export const id="dl_da44615bf570494b89a9";
export const url=new URL("../icons/square-star.svg?v=fb49c0d6b1d7c68b2a0c11dab9cc2bbe64a136824018ad51df334080a11113d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
