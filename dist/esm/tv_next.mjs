export const name="tv_next";
export const id="dl_83f7ae682b721c7df17f";
export const url=new URL("../icons/tv_next.svg?v=44f3fabb3805426408165b4521eec712a25af85e6b8801fb4aba314530591e10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
