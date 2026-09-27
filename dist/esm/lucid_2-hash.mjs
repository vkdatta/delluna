export const name="lucid_2-hash";
export const id="dl_9a5acb23126d40398fec";
export const url=new URL("../icons/lucid_2-hash.svg?v=11980b3d1555d43a3eb2aaa71be7e9ca9236a2d22796dad370dee813e80cb5a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
