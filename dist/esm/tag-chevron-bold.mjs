export const name="tag-chevron-bold";
export const id="dl_62e78bad34f09eced645";
export const url=new URL("../icons/tag-chevron-bold.svg?v=b06b1395df3507e46d24b963af77feb8aeae1bbf7317e2e3abcece2c2b9c5f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
