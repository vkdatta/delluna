export const name="circles_ext-fill";
export const id="dl_72b09a1a1f1039557544";
export const url=new URL("../icons/circles_ext-fill.svg?v=baa7555b6d870ce45eb29d9c0eb250e69c98584c2da8dce7cb8c7a1d12ad2f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
