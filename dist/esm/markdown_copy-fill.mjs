export const name="markdown_copy-fill";
export const id="dl_1d118b4948381c70b878";
export const url=new URL("../icons/markdown_copy-fill.svg?v=c132c0a69753403864405cd38f5694cbb3e263fcd0f017f87f3d7c82d6e5e1ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
