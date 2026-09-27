export const name="horizontal_rule-fill";
export const id="dl_124e4cfd3f448aa02e6c";
export const url=new URL("../icons/horizontal_rule-fill.svg?v=d0d7d76ec77ba56de0968f1c30920610a13a800a60d6901c159eacbd4ec67c14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
