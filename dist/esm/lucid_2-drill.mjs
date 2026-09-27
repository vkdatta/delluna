export const name="lucid_2-drill";
export const id="dl_b8f5d7f60e3e46458c6c";
export const url=new URL("../icons/lucid_2-drill.svg?v=47945970ade56e4ff4c27c1cabf6cc6fc22982d25272de02a00994d189a149cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
