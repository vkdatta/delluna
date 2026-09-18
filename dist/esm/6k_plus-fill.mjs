export const name="6k_plus-fill";
export const id="dl_a1a8b9601db34415bd81";
export const url=new URL("../icons/6k_plus-fill.svg?v=6fa4d8dc857a80c3ba1979a4761f6416bc7648a3a446ffddd6f9d42ce3e405c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
