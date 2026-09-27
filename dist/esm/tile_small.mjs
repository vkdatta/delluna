export const name="tile_small";
export const id="dl_1d560cd14c8d6da7d0fe";
export const url=new URL("../icons/tile_small.svg?v=5249ee876bd5e533dd2fd94ed743f36c6660bd3054084b0d9fa152f219a16791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
