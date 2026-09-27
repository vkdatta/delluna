export const name="arrow-square-down-fill";
export const id="dl_175bdf426e404ffda34a";
export const url=new URL("../icons/arrow-square-down-fill.svg?v=5a507c85009a2da3ba637431f80635a6ab2aa7ef383931363bb2c30253d1ad48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
