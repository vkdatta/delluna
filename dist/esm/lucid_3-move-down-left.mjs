export const name="lucid_3-move-down-left";
export const id="dl_3a830a957f5a489d89c5";
export const url=new URL("../icons/lucid_3-move-down-left.svg?v=93db81c91ae150e1a5a47795134574433fc9fcccbd48c2d5a2183c07bd6edde9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
