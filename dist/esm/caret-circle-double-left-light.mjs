export const name="caret-circle-double-left-light";
export const id="dl_5b8c422e5e5c47e58ba4";
export const url=new URL("../icons/caret-circle-double-left-light.svg?v=077cbb4c2cc558bc2bca1a43958f71f1e45993e9c948aad6a5543e5afa760361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
