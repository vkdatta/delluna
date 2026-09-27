export const name="looks_one";
export const id="dl_df62593cf53b6014967b";
export const url=new URL("../icons/looks_one.svg?v=4e28302df5c8dfec25150bbcc278805d7b6e685e99d4aa63dd49b535fe8c892e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
