export const name="file-arrow-down-fill";
export const id="dl_f8c20a2e518141368bae";
export const url=new URL("../icons/file-arrow-down-fill.svg?v=cd40f20fd5fe4f54b295d19e098803decbbc7d852502362ee676e912831dcb47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
