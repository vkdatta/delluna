export const name="unite-square";
export const id="dl_1e80762af87137be42e5";
export const url=new URL("../icons/unite-square.svg?v=fe5730a914fc61c01f06f1d362c721eda6be29738c77fa0791e1dbb58c8514f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
