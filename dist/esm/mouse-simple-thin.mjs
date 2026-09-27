export const name="mouse-simple-thin";
export const id="dl_7ff3f6a0010d4fc0a050";
export const url=new URL("../icons/mouse-simple-thin.svg?v=719d95d21cde73d4a726501e8cf6f34b0352e8e4a73875e17d51699843ad866a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
