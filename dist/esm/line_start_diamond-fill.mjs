export const name="line_start_diamond-fill";
export const id="dl_7c6d95d0b3c3f5c4db5b";
export const url=new URL("../icons/line_start_diamond-fill.svg?v=4e6139552be139d8c3018f60803f9a33892ce80c8f0d081b913c2e0da738bb1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
