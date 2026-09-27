export const name="brush-fill";
export const id="dl_7db03f5da2409ff089e2";
export const url=new URL("../icons/brush-fill.svg?v=cd1fc79729acc5bebd4f16ccb717694a032156d496e36f9aefebb9b9b0afd913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
