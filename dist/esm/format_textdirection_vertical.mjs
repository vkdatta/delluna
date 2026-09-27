export const name="format_textdirection_vertical";
export const id="dl_5ad465da2570f06ea8a8";
export const url=new URL("../icons/format_textdirection_vertical.svg?v=c8e8e621a7612a0f0efd76360d79dc82a9442ee321014bd550591ae464545027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
