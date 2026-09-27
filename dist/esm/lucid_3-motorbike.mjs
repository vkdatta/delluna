export const name="lucid_3-motorbike";
export const id="dl_60b2b5d5ff0140aab54c";
export const url=new URL("../icons/lucid_3-motorbike.svg?v=58a39f9e7bb140b2288133af2b850477f33fff1b72db82f326f655a3f66a5650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
