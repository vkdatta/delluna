export const name="closed_caption_add-fill";
export const id="dl_6188f8fcbbded15d4431";
export const url=new URL("../icons/closed_caption_add-fill.svg?v=87c2aef8fab1e0ad0388e4b7c44585d58888b7b9045f5c0ffd2d6d0933c47368",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
