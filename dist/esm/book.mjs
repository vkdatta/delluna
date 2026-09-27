export const name="book";
export const id="dl_d4156804ceb84606a76b";
export const url=new URL("../icons/book.svg?v=fe73bcb8e217c8c450cbc2b4cb810afc3caa64d0fef182e7998b1cd5f0c4355c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
