export const name="vote";
export const id="dl_a02fcd238f0048e19fa7";
export const url=new URL("../icons/vote.svg?v=3094d696247342705ea85c33e56b8341bbf81f9f54c709f4a1492e36c7cf1b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
