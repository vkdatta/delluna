export const name="wine-light";
export const id="dl_8488786a461d7a98303c";
export const url=new URL("../icons/wine-light.svg?v=91cae7511094d51f35cd1f42eaf382243a1c0dde87f81e8f379e74004ed1d995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
