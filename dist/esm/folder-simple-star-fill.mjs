export const name="folder-simple-star-fill";
export const id="dl_17a8f6c70ae94beaaacb";
export const url=new URL("../icons/folder-simple-star-fill.svg?v=5f279d9b55cda978f9f4452ce60ba10a7ea2d0e4c1dfa8488e6f3a1687d8f2f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
