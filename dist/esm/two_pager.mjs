export const name="two_pager";
export const id="dl_313d194fca8987e2aac6";
export const url=new URL("../icons/two_pager.svg?v=a2bca75c3202d5244342da88506f052678bfc52fcdf375d891a5aa7f41c70db1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
