export const name="hexagon-duotone";
export const id="dl_1af23a74ae9f44ab9d8e";
export const url=new URL("../icons/hexagon-duotone.svg?v=b3152db0ee3f36c3f9f2622f2b5386259af465ffe62ff6badb70db14042fdef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
