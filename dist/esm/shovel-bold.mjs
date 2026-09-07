export const name="shovel-bold";
export const id="dl_749cad31c38d45e999ee";
export const url=new URL("../icons/S/shovel-bold.svg?v=5d8bc5164620502f14b895c8633b3cdb6823e1eb6081a6366abc75e00163c173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
