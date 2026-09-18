export const name="collections_bookmark";
export const id="dl_1be7bfaa0cc74ef3923d";
export const url=new URL("../icons/collections_bookmark.svg?v=9b6eb43f87bb949ab1dc5d235538dd53e20808907fc859a8694df00b9e678f0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
