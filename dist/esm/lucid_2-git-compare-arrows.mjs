export const name="lucid_2-git-compare-arrows";
export const id="dl_3ce9c436200349f3a8f7";
export const url=new URL("../icons/lucid_2-git-compare-arrows.svg?v=0f0056fc216e3ed93a9577b6cb936cc70c467d53c8d7ea56104e1e9e26243fcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
