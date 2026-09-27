export const name="tag-plus";
export const id="dl_b547a71f3b314c4cb2d5";
export const url=new URL("../icons/tag-plus.svg?v=698817d50f0c288a7d53f5d2e584c17231ac6208e9aca8b07be488a6566c0c8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
