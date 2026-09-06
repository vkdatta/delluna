export const name="lucid_1-book-copy";
export const id="dl_7cb44855fbf444bc99ee";
export const url=new URL("../icons/lucid_1-book-copy.svg?v=2e0429020209021f29f2b8b34deab8712c5691cd5e9ce23b212925f7c514cee7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
