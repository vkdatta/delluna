export const name="cow-fill";
export const id="dl_42bab2fc20c34c4b8cbd";
export const url=new URL("../icons/cow-fill.svg?v=a32a3b68fe5f83673564cd07dd91101ef29d0df3cfd312da7540beea4bef7817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
