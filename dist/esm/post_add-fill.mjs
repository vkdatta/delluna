export const name="post_add-fill";
export const id="dl_d62abc6b1d4ced9c3b54";
export const url=new URL("../icons/post_add-fill.svg?v=8a78c740d2d276017ea72f33a17ee50d58d0206a4dbb8b1ff43c5d281c88c1da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
