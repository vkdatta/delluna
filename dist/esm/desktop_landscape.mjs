export const name="desktop_landscape";
export const id="dl_8749a62eeb532dc99872";
export const url=new URL("../icons/desktop_landscape.svg?v=608fa454e10ff2f15557c396cd8e0f662b7d4bc60bc0d1e3400f2c9776bde729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
