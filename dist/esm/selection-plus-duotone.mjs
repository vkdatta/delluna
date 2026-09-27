export const name="selection-plus-duotone";
export const id="dl_694893b39057daa218c9";
export const url=new URL("../icons/selection-plus-duotone.svg?v=bc9815bb191a3ff0707088d608882327da99ad09b7ce59060b49c84d96bc5db7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
