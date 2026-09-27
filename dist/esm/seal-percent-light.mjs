export const name="seal-percent-light";
export const id="dl_0364e8c5f6c062b9dabe";
export const url=new URL("../icons/seal-percent-light.svg?v=c190bacbe0a5d2d3044370c316e7c647daabbfac560c0bb995b0ab9d54615b35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
