export const name="oven_gen-fill";
export const id="dl_152afadf8b42178cc48e";
export const url=new URL("../icons/oven_gen-fill.svg?v=ff1792b10edebaafd234d0397c777ef1d6bac53ca324d61617b8ae6da8ef918d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
