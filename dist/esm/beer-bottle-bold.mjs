export const name="beer-bottle-bold";
export const id="dl_3ded1a1f609d4a3e9645";
export const url=new URL("../icons/beer-bottle-bold.svg?v=09714229aa5cd7d0734f82e54eb65a87841b1eee98155a53f94e03455aceab56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
