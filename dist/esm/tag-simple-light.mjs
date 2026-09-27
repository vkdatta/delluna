export const name="tag-simple-light";
export const id="dl_920f991ee50b9ea6dc8a";
export const url=new URL("../icons/tag-simple-light.svg?v=d1a4183c530d2184fbcb1e762d9143e5e4d97b9ea1174103f0a7fb5b6dfdaf07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
