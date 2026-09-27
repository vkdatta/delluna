export const name="peace";
export const id="dl_38dfd4a0df554ec1a837";
export const url=new URL("../icons/peace.svg?v=645a673f822e22020a5756a9766d85340f605da8422b80090300e4c8729569db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
