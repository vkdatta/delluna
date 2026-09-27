export const name="compass-fill";
export const id="dl_1eb86ea8312f43759aaa";
export const url=new URL("../icons/compass-fill.svg?v=c339577864445f2777279add93656a551b9ae29ebd3904db6f1fdc6580b65523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
