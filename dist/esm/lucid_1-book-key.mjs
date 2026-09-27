export const name="lucid_1-book-key";
export const id="dl_30bde8b47f814afca5d7";
export const url=new URL("../icons/lucid_1-book-key.svg?v=9acec268d24864890b19b3fce90bec7dec5a4fc87a6442d9bf2a70c9fada0a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
