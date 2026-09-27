export const name="faders";
export const id="dl_ca3daa7feb6d4a3d862c";
export const url=new URL("../icons/faders.svg?v=4e99774e9266c50da1627b8b0644dde8a971ae8fa2a322267437d117f710a01d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
