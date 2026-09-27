export const name="steering-wheel-light";
export const id="dl_b0d89d4b2101b9c45ee7";
export const url=new URL("../icons/steering-wheel-light.svg?v=f544e671bfa3822e8663ceabad573903b2f180f0d0f24145a28d0fed1fcc8800",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
