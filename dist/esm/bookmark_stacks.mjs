export const name="bookmark_stacks";
export const id="dl_1bc39584d5d923bbd38b";
export const url=new URL("../icons/bookmark_stacks.svg?v=25a8b7eed003da71f655a63b6cb8ec92ce58aee798e6b1aac5eee02d323fca92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
