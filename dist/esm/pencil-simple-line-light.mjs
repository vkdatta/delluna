export const name="pencil-simple-line-light";
export const id="dl_386d51b085c0409c8a0f";
export const url=new URL("../icons/pencil-simple-line-light.svg?v=6abd78d2415cadd3c4401c69386a7ed884a5bf800b052c96cafa0102f5d70b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
