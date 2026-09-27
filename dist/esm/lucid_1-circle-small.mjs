export const name="lucid_1-circle-small";
export const id="dl_8f7b0e1dd3784e47bbf1";
export const url=new URL("../icons/lucid_1-circle-small.svg?v=efb76ab8cf5fb5b4fed9299b63a25f545f62d63068b19fba1cfe527a38410d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
