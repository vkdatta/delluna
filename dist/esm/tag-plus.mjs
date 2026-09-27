export const name="tag-plus";
export const id="dl_b547a71f3b314c4cb2d5";
export const url=new URL("../icons/tag-plus.svg?v=7ad39024bb243de3700cb1f2f9e492dafe47ca342a4e6f60d7148e3651b416f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
