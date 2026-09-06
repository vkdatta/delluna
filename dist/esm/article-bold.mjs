export const name="article-bold";
export const id="dl_badbdfc11d154554904f";
export const url=new URL("../icons/article-bold.svg?v=7eb97d3686316129adff9e564f47ef47cc5d307e45e97fdca1121fb4e6cd25ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
