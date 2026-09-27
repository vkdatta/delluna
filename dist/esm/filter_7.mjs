export const name="filter_7";
export const id="dl_ae07bc5677031eec0cb9";
export const url=new URL("../icons/filter_7.svg?v=30cb234b914b963f832a95a02572e4e823ad597df6c2374e5416c168f90bd164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
