export const name="cow-fill";
export const id="dl_42bab2fc20c34c4b8cbd";
export const url=new URL("../icons/cow-fill.svg?v=2f9a7c3cb6f4dace78e0ec5fd44fd667f65b76e97cb7077c65e4b9f6ec5fa900",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
