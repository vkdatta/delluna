export const name="smiley-angry-duotone";
export const id="dl_e74995f568984ce3bebe";
export const url=new URL("../icons/S/smiley-angry-duotone.svg?v=2ae7d6f31b37fe9a9061e218234e811d1459981ddf9d174e04fcfabd9a55263c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
