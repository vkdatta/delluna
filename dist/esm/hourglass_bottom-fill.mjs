export const name="hourglass_bottom-fill";
export const id="dl_17d47546ab06504a50f1";
export const url=new URL("../icons/hourglass_bottom-fill.svg?v=88149972fc709f711dfea3c49be05033a1e844bbddca7bad463af82642324002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
