export const name="lucid_3-minimize-2";
export const id="dl_b6c863f0cc9547dc8971";
export const url=new URL("../icons/lucid_3-minimize-2.svg?v=90656c17993768013ed52816aba21434ea6e1a12d396d4e8ad83f84babc6fa54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
