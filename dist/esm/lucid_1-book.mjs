export const name="lucid_1-book";
export const id="dl_81689f43038645169638";
export const url=new URL("../icons/lucid_1-book.svg?v=0d55c1bcf868b8298b4607b6e71cc2b3e9ac8d7f49a1bd4e9d54a07cfbc0728b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
