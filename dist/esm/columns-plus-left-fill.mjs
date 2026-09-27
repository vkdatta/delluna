export const name="columns-plus-left-fill";
export const id="dl_b6a5f3e3dcff43d4a827";
export const url=new URL("../icons/columns-plus-left-fill.svg?v=fb2e071f10ab981c81c63ba015bafde235e1e4e5d85a44b964da385ebccdcfdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
