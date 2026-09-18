export const name="rebase_edit";
export const id="dl_274d4a8550cf4f9fad8a";
export const url=new URL("../icons/rebase_edit.svg?v=b0b0a771f30f6cafb939833bfde2701d8cb52aa84b6122c3990c6decef996758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
