export const name="lucid_3-scroll-text";
export const id="dl_acac7bef925e470e8595";
export const url=new URL("../icons/lucid_3-scroll-text.svg?v=7a9f497be0254fb95c538ba1429d204eefb277539e98bfe181d19ea2cb0de3de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
