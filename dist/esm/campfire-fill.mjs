export const name="campfire-fill";
export const id="dl_eba9590d85f64a19bc93";
export const url=new URL("../icons/campfire-fill.svg?v=bed7891225f328411a649cc0fc7b674641e11cdf701e9396d71717bbc9945d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
