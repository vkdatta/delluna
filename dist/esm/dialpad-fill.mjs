export const name="dialpad-fill";
export const id="dl_0dedfa27209b4f82a0b5";
export const url=new URL("../icons/dialpad-fill.svg?v=e4eb93c6a4fae8a8b9b5ad47863349abe279e9dcae84a5f9789e99dbb06ddd81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
