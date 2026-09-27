export const name="leak_add-fill";
export const id="dl_6f8e3e52a296b4f6a01c";
export const url=new URL("../icons/leak_add-fill.svg?v=86b50ffea6df64754be8f64d497862b293359108bfeaeb5c4172348557bea09d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
