export const name="list-checks-fill";
export const id="dl_dccadb40aa7b49b196e8";
export const url=new URL("../icons/list-checks-fill.svg?v=82ecbcfffd9603e0b5c22aea80c66296c10abb424ac22dd1f86b10631d6c1f3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
