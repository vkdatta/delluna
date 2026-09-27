export const name="swiss-franc";
export const id="dl_4f47dd52ae0c47d5adf9";
export const url=new URL("../icons/swiss-franc.svg?v=f8d8b8e29871fa5a90229add803a61ef37cc4aef278bb59286badc98346d29a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
