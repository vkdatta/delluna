export const name="expand_content-fill";
export const id="dl_2c757d0a2f7f454caa2e";
export const url=new URL("../icons/expand_content-fill.svg?v=98eec9f6aabf6700635818347b64451f792b96ccea36ce239f780837fa7723df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
