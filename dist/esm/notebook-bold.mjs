export const name="notebook-bold";
export const id="dl_a85568ff5bf44f12a286";
export const url=new URL("../icons/notebook-bold.svg?v=c4e040f907adf24fa4a125719586c8fb7d0fd552ce3200eaba211aad0b667829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
