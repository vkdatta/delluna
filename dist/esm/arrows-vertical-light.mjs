export const name="arrows-vertical-light";
export const id="dl_12631596749049bf94e7";
export const url=new URL("../icons/arrows-vertical-light.svg?v=87fb6ac8ec6f68caaaa03babcfd69c8a29d90d63fc95f8dc2f566e67c1021546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
