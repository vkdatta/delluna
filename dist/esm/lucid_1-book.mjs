export const name="lucid_1-book";
export const id="dl_81689f43038645169638";
export const url=new URL("../icons/lucid_1-book.svg?v=82d8ea6f40a98c02ecd2475ab19088574d4944ebacd1cbb9b150586f3e71f20f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
