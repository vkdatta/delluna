export const name="lucid_1-bed-double";
export const id="dl_a8301bda9b0647f39534";
export const url=new URL("../icons/lucid_1-bed-double.svg?v=1301fa5932b4155ba12bee941a085796c1451d4f836cc3cbfbe4617e42ed77c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
