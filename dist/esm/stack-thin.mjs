export const name="stack-thin";
export const id="dl_550ea2d65301478db79a";
export const url=new URL("../icons/S/stack-thin.svg?v=1c7deee777d9cdab51eb46a9fa622c7447e8110ea1e0dca25be6360787476e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
