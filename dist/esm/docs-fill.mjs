export const name="docs-fill";
export const id="dl_c583182f8ad375c0a847";
export const url=new URL("../icons/docs-fill.svg?v=50fa4c60afbb11141afbcc668de69ad27fc48057821d69eca3a3d243f1ec1a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
