export const name="dresser";
export const id="dl_428e5f81e10c47b1aca4";
export const url=new URL("../icons/dresser.svg?v=f764df754458f35e13feb7b9610ab3d141aa1cba62f542e0c8ed8c5ebd66861e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
