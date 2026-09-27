export const name="tab_close_right-fill";
export const id="dl_110ee56c5b6681d12f2d";
export const url=new URL("../icons/tab_close_right-fill.svg?v=3cb70f03c45427363eae7c91eb358a42396d476f726fea617a2482efa207ea9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
