export const name="share_off";
export const id="dl_df4507c0549f4655ad0f";
export const url=new URL("../icons/share_off.svg?v=b04733ec17d48cb4de52579f11ba59c1605edbfd068ec538b975dca34a5f5e23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
