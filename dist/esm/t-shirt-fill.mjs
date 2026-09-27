export const name="t-shirt-fill";
export const id="dl_036f13b698596cdcb9e5";
export const url=new URL("../icons/t-shirt-fill.svg?v=35935c55a33c3210bcca1157b37d28749de911b73ec4cbad502116200da3468a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
