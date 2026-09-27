export const name="stack-minus-fill";
export const id="dl_72ab6763614652030455";
export const url=new URL("../icons/stack-minus-fill.svg?v=7ad38abfb514ca7df91fffe72956d3b0859e4028519a0b7b04f23642dda8765f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
