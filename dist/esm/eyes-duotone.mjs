export const name="eyes-duotone";
export const id="dl_d4c34cb175374290abcf";
export const url=new URL("../icons/eyes-duotone.svg?v=0470d6eb02d2beb2a942d6d479769aead8d855bbae19fdfc3319ae76c1710450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
