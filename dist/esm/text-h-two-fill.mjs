export const name="text-h-two-fill";
export const id="dl_a95f740b66c4bb767d8e";
export const url=new URL("../icons/text-h-two-fill.svg?v=99d6bd7c9ed77d5ab6777bc9a3cd875a5d7c81d195849160151d0babf8ba6d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
