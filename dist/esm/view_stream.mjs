export const name="view_stream";
export const id="dl_0126cb903e33c0e2616e";
export const url=new URL("../icons/view_stream.svg?v=7937ebad4d11377c8900b283f3c38b2e64d77a78c0d072ba2b6f7f62564cc454",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
