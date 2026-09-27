export const name="guitar";
export const id="dl_de2ad63c1bfc4303849c";
export const url=new URL("../icons/guitar.svg?v=5c74a8fa8075dffd09ea4cce01427c373e3bd1e73bf355f2b13975f44136bef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
