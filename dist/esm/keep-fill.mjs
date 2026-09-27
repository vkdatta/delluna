export const name="keep-fill";
export const id="dl_392964e314c7970c4b0f";
export const url=new URL("../icons/keep-fill.svg?v=8c0c98502b952a82d83dde05d54752dffe1aa0d9213d1b026cff0258c0254430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
