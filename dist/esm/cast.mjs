export const name="cast";
export const id="dl_5d0a566d12a14ac7363e";
export const url=new URL("../icons/cast.svg?v=48f94b4825b4fd24045fba76f8ab9c96fa9a65f5f54594c691366049eafba1e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
