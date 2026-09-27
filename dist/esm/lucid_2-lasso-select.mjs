export const name="lucid_2-lasso-select";
export const id="dl_de8cfc5401694dbfb83c";
export const url=new URL("../icons/lucid_2-lasso-select.svg?v=1757131c2c606560e87251c89ce2ccf0539bec472ee1d048e49dcca33a700827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
