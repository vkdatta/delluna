export const name="highlighter-circle-fill";
export const id="dl_be2a765869d24c9e8c53";
export const url=new URL("../icons/highlighter-circle-fill.svg?v=dcde6a46f9b7c1d9335d5bcae711ac2c05504dfe4ceb4dd1e0482a602c557664",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
