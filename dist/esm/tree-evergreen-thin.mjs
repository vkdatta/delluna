export const name="tree-evergreen-thin";
export const id="dl_841c3cdbc69946f5b0f1";
export const url=new URL("../icons/T/tree-evergreen-thin.svg?v=3a0db41813e7f8abee66b325b416bc1dc14013c64f9f6d4d49b541bac9d3b670",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
