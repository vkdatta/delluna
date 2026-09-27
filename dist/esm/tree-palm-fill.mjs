export const name="tree-palm-fill";
export const id="dl_0f6e3b67652f10706ea8";
export const url=new URL("../icons/tree-palm-fill.svg?v=79545f4cd8a043fd379dfab58a12536af0b17f5dd2fb667c33dc8785821f68b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
