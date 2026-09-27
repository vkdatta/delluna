export const name="lucid_3-mountain";
export const id="dl_5f68bbb237314da7b205";
export const url=new URL("../icons/lucid_3-mountain.svg?v=2ef1d25f49db06735957ed316d4da8e8a5e7990e080fd8748535e6e3752255ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
