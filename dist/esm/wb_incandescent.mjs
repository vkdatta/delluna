export const name="wb_incandescent";
export const id="dl_d8ef2be7f62a36936da3";
export const url=new URL("../icons/wb_incandescent.svg?v=a970021a8c80fb4774d1937712425a7585545d23ce4271292b4d2c7d9abcac8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
