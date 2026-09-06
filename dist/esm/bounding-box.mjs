export const name="bounding-box";
export const id="dl_3907ed2dbaf24eb788bb";
export const url=new URL("../icons/bounding-box.svg?v=f8cd5f6ad171105ae796a31b7d6856ef143843bb4f73d4a2e21cd8648a1b135e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
