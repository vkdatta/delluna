export const name="tree-view-bold";
export const id="dl_7af4e79311fa490aa213";
export const url=new URL("../icons/T/tree-view-bold.svg?v=9e33f6f9d30da0653b156131ebea99fefde723de23af16f3171a305940bf451b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
