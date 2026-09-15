export const name="compost-fill";
export const id="dl_df2a689f88cd49b29edb";
export const url=new URL("../icons/C/compost-fill.svg?v=b831a54e6c950fcbeaab2f635e9a94d8649ad12422e95e9d8d63ac16937d656f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
