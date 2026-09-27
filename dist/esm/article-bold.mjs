export const name="article-bold";
export const id="dl_badbdfc11d154554904f";
export const url=new URL("../icons/article-bold.svg?v=75643b2bb04005c32a4f696f6cd2232f7c33bb2f13aa84c39eb1fb0228449ff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
