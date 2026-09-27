export const name="toolbar-fill";
export const id="dl_f789cb3e89df6d7611f4";
export const url=new URL("../icons/toolbar-fill.svg?v=baa988f1f60fc2310e238eb18fb38962cc028ba7e6c068c5c73c839afe4c4629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
