export const name="stack_hexagon-fill";
export const id="dl_6d2f6247f768bd516bfb";
export const url=new URL("../icons/stack_hexagon-fill.svg?v=6923d266fe193ff5f213f152c3879e4951d838098056f50d5f29ed88d61fc5a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
