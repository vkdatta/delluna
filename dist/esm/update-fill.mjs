export const name="update-fill";
export const id="dl_02fc12cf9b674214b53a";
export const url=new URL("../icons/U/update-fill.svg?v=748c72596a40dcdd238258f3661a699c3dc4fa657d0e76f6758d78454a570b7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
