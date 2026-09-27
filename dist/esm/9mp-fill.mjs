export const name="9mp-fill";
export const id="dl_4e5d0fafbb7ea3d72419";
export const url=new URL("../icons/9mp-fill.svg?v=db9a5e4f96ed93d0c326b71e4afd6ff4f6286d19c7e696ae4f5f0499c611f1fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
