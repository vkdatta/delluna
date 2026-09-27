export const name="highlighter-light";
export const id="dl_7e844f8f50bc4f008d73";
export const url=new URL("../icons/highlighter-light.svg?v=e5577a457daeb6fc7c836042f8a27d6b04a58fd28c14f9a586570f7df3d27c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
