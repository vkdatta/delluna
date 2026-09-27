export const name="key-duotone";
export const id="dl_9b6ab012e80a404fb423";
export const url=new URL("../icons/key-duotone.svg?v=275494d1c0a40b43ba4bda643482156e8f52a4e91c1f296f937f32f4b47a062a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
