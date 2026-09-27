export const name="lucid_1-circle-chevron-down";
export const id="dl_87cd2d69777049c39e7f";
export const url=new URL("../icons/lucid_1-circle-chevron-down.svg?v=4bc49242e6bdc37a42b2b6b92aa27f283028289e4355f69d603d2ee0a5d3479d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
