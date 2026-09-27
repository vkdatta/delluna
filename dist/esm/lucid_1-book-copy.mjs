export const name="lucid_1-book-copy";
export const id="dl_7cb44855fbf444bc99ee";
export const url=new URL("../icons/lucid_1-book-copy.svg?v=e5d23bdf8e4ebd959dfebacfdc38c7151c114ee002760dbe4f4a0737f0b3233e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
