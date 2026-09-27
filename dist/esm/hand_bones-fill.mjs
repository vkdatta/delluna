export const name="hand_bones-fill";
export const id="dl_501ffffc81c0466cc408";
export const url=new URL("../icons/hand_bones-fill.svg?v=839013126b502362995440d6904e359f4e1f27f3ed54c1ebe5b2919f7a78adee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
