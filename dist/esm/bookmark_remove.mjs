export const name="bookmark_remove";
export const id="dl_ab88dfb03b978118469a";
export const url=new URL("../icons/bookmark_remove.svg?v=083c77415507d2a1861275e01a297b2752045c813a9d1ecaefa473f13a2006fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
