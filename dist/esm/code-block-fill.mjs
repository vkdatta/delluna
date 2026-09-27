export const name="code-block-fill";
export const id="dl_03e12724a3314780ae2a";
export const url=new URL("../icons/code-block-fill.svg?v=837507992d2ef1231c2dc891673b5c614728513cec4802499ff2e054a790d4d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
