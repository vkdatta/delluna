export const name="humerus_alt-fill";
export const id="dl_e3cad18e948b8e3722b5";
export const url=new URL("../icons/humerus_alt-fill.svg?v=015e020e802743a01bcbadf829eaf72ed2de24e5da53e5aaa2bef446150d49d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
