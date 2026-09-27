export const name="detective-duotone";
export const id="dl_af1fb4949b4347d4b34a";
export const url=new URL("../icons/detective-duotone.svg?v=1a0320d537ee04cf92cb1cf3341b1a40819a31f8d4011e31c3934abc39ac5632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
