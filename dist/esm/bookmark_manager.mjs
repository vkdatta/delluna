export const name="bookmark_manager";
export const id="dl_0fbba531a06c4db6a2de";
export const url=new URL("../icons/B/bookmark_manager.svg?v=aad09ee9369b8c1157fa6e07afe07cb8f016ac0770f04acf129a0e6310a4798f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
