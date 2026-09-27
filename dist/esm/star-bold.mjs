export const name="star-bold";
export const id="dl_38cca97f7bd8d4e83b9a";
export const url=new URL("../icons/star-bold.svg?v=7798888914ae25b198da6e88c4e596d130ea7bc8cd89542d80ade73835e98064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
