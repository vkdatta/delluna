export const name="book-bookmark-thin";
export const id="dl_20df5d44303543e5b198";
export const url=new URL("../icons/book-bookmark-thin.svg?v=6006ee1374ee2c82dd1c552d1f4e8375edc9d608f1098d3ad64f5c155afe8ae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
