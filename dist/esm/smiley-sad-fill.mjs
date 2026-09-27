export const name="smiley-sad-fill";
export const id="dl_2494bfeafc66dfaad851";
export const url=new URL("../icons/smiley-sad-fill.svg?v=057710adeed806a74b70d377245baf5f744e7ce5ba1f6de15c187a235fd2a50c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
