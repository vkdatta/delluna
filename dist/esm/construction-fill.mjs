export const name="construction-fill";
export const id="dl_f8d1f529c4a54df1a2fb";
export const url=new URL("../icons/construction-fill.svg?v=1a8f853a1d58c25f738b8a30c53c3fde0bd34c249aed6b8ca8c56a58cf1c8edc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
