export const name="lucid_2-creative-commons";
export const id="dl_4f91c194ce21479d85ff";
export const url=new URL("../icons/lucid_2-creative-commons.svg?v=4e1e8b1d6a7bd8bf674024c48ac54d4d313c87db458a9f35e4893832a1869eda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
