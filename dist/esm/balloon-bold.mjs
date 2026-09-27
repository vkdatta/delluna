export const name="balloon-bold";
export const id="dl_c2ef96ecc66f4b63ab12";
export const url=new URL("../icons/balloon-bold.svg?v=65ba1240169bd5f9a30d2b6465df639ee3b0252f653f825683b9b4ea23fa52e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
