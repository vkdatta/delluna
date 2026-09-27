export const name="image_search-fill";
export const id="dl_ffe02c44a59cafcc1a35";
export const url=new URL("../icons/image_search-fill.svg?v=65bedfd0664c347503ebbd87c59531878548b8710d18240cd5783ee79da7fb7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
