export const name="watch";
export const id="dl_0c6e4d29e2e7438d96fc";
export const url=new URL("../icons/watch.svg?v=17e834c7bc1fcd5250890e8799abe2f849ac28090d51a5884d56c3dc4bfd868c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
