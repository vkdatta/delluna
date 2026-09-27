export const name="lucid_2-hand-metal";
export const id="dl_4047baf432ff470e8648";
export const url=new URL("../icons/lucid_2-hand-metal.svg?v=f534b8d5bc8360b34c737d5c61daa3e16c0bdad06cae29500af50c142b9fa3f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
