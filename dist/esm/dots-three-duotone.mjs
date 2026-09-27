export const name="dots-three-duotone";
export const id="dl_6f40e5f42e8e4a4b8dd1";
export const url=new URL("../icons/dots-three-duotone.svg?v=9b547342990996277c9c6e8d9b6888fc88a52fcc0e765f79aafda838194308f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
