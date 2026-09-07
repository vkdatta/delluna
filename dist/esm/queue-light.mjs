export const name="queue-light";
export const id="dl_1aeb31721c4d462fa682";
export const url=new URL("../icons/queue-light.svg?v=a9ebcd837babfefe785be3a91ee544473499a6ef1792ad86d6f0ea9fc129dcd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
