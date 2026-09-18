export const name="toolbar-fill";
export const id="dl_d0368951fb87429a8996";
export const url=new URL("../icons/toolbar-fill.svg?v=af8c16bd8c3e923e0449b1e3debe481a3ec7e14211049ff204551e0edf65ba46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
