export const name="encrypted_add_circle-fill";
export const id="dl_2ea25c7c917f2843abf5";
export const url=new URL("../icons/encrypted_add_circle-fill.svg?v=9a6ceecbef9b0f87f8c8bfcf7ba8ad99bc122f98e0e22624e035af99b28845d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
