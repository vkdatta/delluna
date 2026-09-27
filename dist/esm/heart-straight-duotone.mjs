export const name="heart-straight-duotone";
export const id="dl_e42e33fe9c4f458782cd";
export const url=new URL("../icons/heart-straight-duotone.svg?v=93cdd60d5832f1cfe96184326e05c0d7b883d92513350d60ffa346d27eeeb7d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
