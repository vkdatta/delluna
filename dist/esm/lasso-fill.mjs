export const name="lasso-fill";
export const id="dl_8750d1f50b774b5a93af";
export const url=new URL("../icons/lasso-fill.svg?v=e6807c1566953f6e78ad47180d642cf3f205e9c8c84689d20fc30c5d7c248d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
