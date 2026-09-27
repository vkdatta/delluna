export const name="lucid_1-book-copy";
export const id="dl_7cb44855fbf444bc99ee";
export const url=new URL("../icons/lucid_1-book-copy.svg?v=9235e8743dbbbc5db918637db7b40d643f1f5ed454d3beeefbed8840f2ba5c9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
