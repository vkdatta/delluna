export const name="shapes";
export const id="dl_4499f7e8bc24519efd28";
export const url=new URL("../icons/shapes.svg?v=b3e7aa12c006d555275b543132ee9779abd20f7991bb1c0e61b006a4e472b265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
