export const name="user-list-thin";
export const id="dl_13df56ed627c1615f087";
export const url=new URL("../icons/user-list-thin.svg?v=5128aadc1f05dbd2f42f56755208cdfd968115ba8fd2574bb5150603bf1a07a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
