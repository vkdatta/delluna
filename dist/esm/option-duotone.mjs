export const name="option-duotone";
export const id="dl_9ade4861df1a435ba911";
export const url=new URL("../icons/option-duotone.svg?v=f75e728cd5f268dca310389cc26b7fccc01623b0e7c841a75787f22db24486f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
