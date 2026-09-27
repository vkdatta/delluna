export const name="hdr_plus_off-fill";
export const id="dl_d92c366a71711f0fbb16";
export const url=new URL("../icons/hdr_plus_off-fill.svg?v=0bebe716c4999f282e88c417c971182da1874239471c0c74e39f2ed7f5088d67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
