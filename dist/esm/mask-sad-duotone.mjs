export const name="mask-sad-duotone";
export const id="dl_9c3bb235682348f3a54e";
export const url=new URL("../icons/mask-sad-duotone.svg?v=1cd7c1fc6dd3cc8ac84c9ed6419b3448f85dc7bb3cff033c014d86dc4c5054e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
