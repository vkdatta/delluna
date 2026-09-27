export const name="dirty_lens-fill";
export const id="dl_8a94e3cd90c7d89e9d93";
export const url=new URL("../icons/dirty_lens-fill.svg?v=c3799356a0bda7c248aea4771f40ee30a8eb5f8a98900eab73dcaa33c34b45c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
