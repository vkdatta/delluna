export const name="file-tsx-fill";
export const id="dl_063a3bb56a044bf3b581";
export const url=new URL("../icons/file-tsx-fill.svg?v=775b45666f32b9e6784cd4264820a502ad89a645047df3c533c8d868a025e2dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
