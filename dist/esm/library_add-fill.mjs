export const name="library_add-fill";
export const id="dl_df4099a5331885dcde60";
export const url=new URL("../icons/library_add-fill.svg?v=1a578801577cd05830e9f15aa92b95a8fa1a77dc42e85e978ce02e80d6435b84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
