export const name="star-of-david-bold";
export const id="dl_59cdd13d90d34b43b98a";
export const url=new URL("../icons/S/star-of-david-bold.svg?v=2c84eabf3ddf323f26b9cd00f0f97b53d08ba4a1ee9e0b49c13cb80900f3390e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
