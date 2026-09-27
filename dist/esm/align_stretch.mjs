export const name="align_stretch";
export const id="dl_bd9c5713394dca1c26c1";
export const url=new URL("../icons/align_stretch.svg?v=5cd32a7440fff4faa213b7c128564386569ddb9d37ee2139f22c25ad2dca8a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
