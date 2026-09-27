export const name="local_pizza-fill";
export const id="dl_5e48f313ff5fa7aa2b11";
export const url=new URL("../icons/local_pizza-fill.svg?v=96800288dcba89e58a602ab580e3f53cc91048501169c226f5ca282c6091b669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
