export const name="stack-fill";
export const id="dl_252a7a92c6177a92ba98";
export const url=new URL("../icons/stack-fill.svg?v=03d1abe58370c03ad5b53a37a70c2cf8be72a81f19d07faedd32d737bf19464c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
