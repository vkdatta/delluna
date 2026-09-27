export const name="number-one-fill";
export const id="dl_08e506b8cd0042b087a0";
export const url=new URL("../icons/number-one-fill.svg?v=d1014df2dd6c85c4ddfdf9e1ac997f5ad4a6d40ccf06c0ae4ecf5917c403375d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
