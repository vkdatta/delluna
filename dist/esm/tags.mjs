export const name="tags";
export const id="dl_a39f01d305f9434c9d19";
export const url=new URL("../icons/tags.svg?v=f88fab4e1c1147cbe652515f3082f027b519272c55d83540908a1ba4f87366f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
