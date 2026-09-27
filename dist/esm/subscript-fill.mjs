export const name="subscript-fill";
export const id="dl_6303826b44250ddd202b";
export const url=new URL("../icons/subscript-fill.svg?v=f7e6eed729cb2fd87a87a9bf6ea7077f066e325fb865c78bb9c61a9a3a7b23d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
