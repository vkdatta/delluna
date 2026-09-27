export const name="5k";
export const id="dl_5fca8afe92470cdec1fa";
export const url=new URL("../icons/5k.svg?v=c674855673616ab3f58a2a1dc91ba2364803194417a5072d91b3bc7b3d855f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
