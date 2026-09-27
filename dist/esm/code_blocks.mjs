export const name="code_blocks";
export const id="dl_aadb7ca6dbb8a88c84b3";
export const url=new URL("../icons/code_blocks.svg?v=22cd0554843e4f779f8943e192f95ac0ef7983ff9154d932ba48b66b232920ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
