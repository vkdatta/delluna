export const name="bag-thin";
export const id="dl_329df036b65b4bbd85bc";
export const url=new URL("../icons/bag-thin.svg?v=21f32b1ca61e81f6955f8136e807c82670007c6786f5eebe947bfc5b75705e32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
