export const name="cherries-duotone";
export const id="dl_bca95862cf024d6895c0";
export const url=new URL("../icons/cherries-duotone.svg?v=f5b2d98de1a7fda069b5bafd7c7b5eee465755909f40ae981b0088bae9dca07a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
