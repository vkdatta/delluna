export const name="dots-six-vertical-fill";
export const id="dl_5a11c4b929704f4885c9";
export const url=new URL("../icons/dots-six-vertical-fill.svg?v=9386e9649ba767b8c1930156f40dd4425177ceb91ef127d87ce3bcc959888787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
