export const name="imagesearch_roller-fill";
export const id="dl_31727a5b84b8290f4fd5";
export const url=new URL("../icons/imagesearch_roller-fill.svg?v=fcf76350bd2a3b53ba6fc279cb822f1739dc1c62c83fa8cc3ffcfd6e902015d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
