export const name="decimal_increase-fill";
export const id="dl_0ded89de36a489ba14f7";
export const url=new URL("../icons/decimal_increase-fill.svg?v=3d5ad0a28282c4333a43b8671daa0b215df5ad393cc7ba1b290c2a85f41e3087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
