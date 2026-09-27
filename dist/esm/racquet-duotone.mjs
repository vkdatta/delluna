export const name="racquet-duotone";
export const id="dl_87bbb94eefc847e49add";
export const url=new URL("../icons/racquet-duotone.svg?v=181f7f68ebd3caabea492cc9f2ab2210f5220b2ea194119dfc37ee2c17ffb677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
