export const name="ink_eraser_off-fill";
export const id="dl_df07894ebbb901583aaa";
export const url=new URL("../icons/ink_eraser_off-fill.svg?v=ef142c4804fa928d4db3f1fdc023ad409a01924f1fbe259bcacb0e0d811e5710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
