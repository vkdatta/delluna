export const name="scribble-light";
export const id="dl_7063cad063d1271a99a2";
export const url=new URL("../icons/scribble-light.svg?v=b40aca49318fee99ecc9883aad3e3b0afdad1fb4f450bdcf911682943e6bc691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
