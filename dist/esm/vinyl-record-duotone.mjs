export const name="vinyl-record-duotone";
export const id="dl_caef9e1273694716a3c2";
export const url=new URL("../icons/V/vinyl-record-duotone.svg?v=4f0518063428e14caba949b30f461032b08e67f63b22f68a0c8529bd4ab7990c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
