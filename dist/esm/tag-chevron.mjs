export const name="tag-chevron";
export const id="dl_42015ff548934cc2a1e7";
export const url=new URL("../icons/T/tag-chevron.svg?v=94195e34c6be7f3022c47abddb9b6193f7687d881b0d71f64578ba23f97d6f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
