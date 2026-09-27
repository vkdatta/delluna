export const name="lucid_1-a-arrow-down";
export const id="dl_99e16fe3de054ba595f1";
export const url=new URL("../icons/lucid_1-a-arrow-down.svg?v=d3c37acbbe77369a16f8d8ba24461a5e582a012943cd397d0daa9716e8a52521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
