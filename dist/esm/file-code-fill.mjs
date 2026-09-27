export const name="file-code-fill";
export const id="dl_7126e3e5ea0e4591a12c";
export const url=new URL("../icons/file-code-fill.svg?v=0c43051c1569d54062a27ef25f43cdd1527266ffcd199466725171dfeda72bc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
