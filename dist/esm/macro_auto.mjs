export const name="macro_auto";
export const id="dl_bece125e1bf7e8fdfc4c";
export const url=new URL("../icons/macro_auto.svg?v=4d139ac116bb505428bc19767363146e8c60829000d8f6c6a047fa70d1358776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
