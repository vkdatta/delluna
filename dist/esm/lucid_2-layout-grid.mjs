export const name="lucid_2-layout-grid";
export const id="dl_d7ae374064f14e4584dc";
export const url=new URL("../icons/lucid_2-layout-grid.svg?v=1948bea44e80425f2e1469c2a1cdfda1681593a89611c3fc7d2aa06db67a7c58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
