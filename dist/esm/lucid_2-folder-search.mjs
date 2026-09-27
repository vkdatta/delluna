export const name="lucid_2-folder-search";
export const id="dl_5899bc56c2c74f999628";
export const url=new URL("../icons/lucid_2-folder-search.svg?v=48b0eab3c788a4e90b5490b095a74cafe7377b0e6bba7d5029d04b1f2d8a67d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
