export const name="arrow-bend-right-down-light";
export const id="dl_344246fa73d9461f91df";
export const url=new URL("../icons/arrow-bend-right-down-light.svg?v=39dd7f98c754d5365da7aab10d3345157703ef6e4e05e369b61b6371063e1377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
