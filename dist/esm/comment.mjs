export const name="comment";
export const id="dl_0d798fb0833d73c761ab";
export const url=new URL("../icons/comment.svg?v=a3bfe9eefdef52c5f4dbb59d85138eb5305ea05d5b5df80f645c6df03c0c11e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
