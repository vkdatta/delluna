export const name="star_border";
export const id="dl_a2e368921f40c20b11cf";
export const url=new URL("../icons/star_border.svg?v=3709d0abe50235b9e5c48c0f9a7b3becf4b104ba6b2f87d70a445f5b2230511e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
