export const name="infinity";
export const id="dl_24cb7c57dc7a48e9a6d5";
export const url=new URL("../icons/infinity.svg?v=f16a78946374d270438a9fdc3e77893a8617827bf65d871f428f1eada1e6cdd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
