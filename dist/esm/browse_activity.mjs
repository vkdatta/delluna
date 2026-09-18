export const name="browse_activity";
export const id="dl_d2158108768d40dc822f";
export const url=new URL("../icons/browse_activity.svg?v=0e735c6ac94f8b77785e217f517b733dcd89f5469e3293c4b9ebe1721afb8ac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
