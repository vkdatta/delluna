export const name="nut-light";
export const id="dl_0ee4a7ee787e44edaf56";
export const url=new URL("../icons/nut-light.svg?v=7a6cef37d952e8416d3f3776fa30f7a9ab832c03b78f14ce1f2d4253edd5e741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
