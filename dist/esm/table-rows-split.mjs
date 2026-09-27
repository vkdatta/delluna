export const name="table-rows-split";
export const id="dl_8e9f36a630ae4b15a0e7";
export const url=new URL("../icons/table-rows-split.svg?v=1bae8c0b418aeeedcc3ece4e82c37c9778e32752fea75c28133abbc3be8e5bc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
