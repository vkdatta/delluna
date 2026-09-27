export const name="lucid_2-egg-fried";
export const id="dl_5f42bf55c6ed45c78d85";
export const url=new URL("../icons/lucid_2-egg-fried.svg?v=9f4347e44a2fb8487b172587bad2527d3c21b43fe72911151f4ed87fcd36cd8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
