export const name="lucid_1-bookmark";
export const id="dl_9e4d90ac12bf4749a1f5";
export const url=new URL("../icons/lucid_1-bookmark.svg?v=2fab9eb945c629e63f9f8eaebcafda1456fb336892154038dc05f4662064f5cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
