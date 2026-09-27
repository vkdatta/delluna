export const name="eyeglasses_3-fill";
export const id="dl_893d1e881b44ca1e39aa";
export const url=new URL("../icons/eyeglasses_3-fill.svg?v=3cdc3b72a2ef6ff4c4f83b53be551746c82d2effa6178f2da1f48152fde704d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
