export const name="nephrology";
export const id="dl_3467b4319b2168d1977a";
export const url=new URL("../icons/nephrology.svg?v=f845ac92b6378b70a00ae4315bceb94d6ad117271bb06064efc549f642c0be8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
