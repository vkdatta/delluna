export const name="stock_media-fill";
export const id="dl_757c3c0d3b9b397ce82f";
export const url=new URL("../icons/stock_media-fill.svg?v=a8a0d02a642942a61171b7f523c23f71f3b37158d83a980813ab7c7c5ab29f6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
