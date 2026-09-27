export const name="yarn-duotone";
export const id="dl_c94d5f6fa3f7d03f2666";
export const url=new URL("../icons/yarn-duotone.svg?v=5dec67c6b1faf511dc14de3e418ab38f5b326add383fbb512cfefb042efa028a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
