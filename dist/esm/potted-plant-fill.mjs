export const name="potted-plant-fill";
export const id="dl_fd110c4dbf6640fbbb34";
export const url=new URL("../icons/potted-plant-fill.svg?v=ae0d369c7952316f8eedd2100a83409d882ee176e32ea3eefb00e123e16a732d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
