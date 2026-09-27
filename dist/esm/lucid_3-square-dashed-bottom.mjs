export const name="lucid_3-square-dashed-bottom";
export const id="dl_5f4c2348eee84ccc86e9";
export const url=new URL("../icons/lucid_3-square-dashed-bottom.svg?v=22d0a61edba3a54b87b6549c6ab9cc34401624be995ce6c946aa1863a6380621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
