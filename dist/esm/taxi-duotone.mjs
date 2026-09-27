export const name="taxi-duotone";
export const id="dl_d695938db49958194079";
export const url=new URL("../icons/taxi-duotone.svg?v=4f19ff6e8e0ea9214be68265ebfd5a1759f5f5f415cb76c85b013a07387db464",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
