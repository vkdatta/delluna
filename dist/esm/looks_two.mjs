export const name="looks_two";
export const id="dl_b753a1868de689612132";
export const url=new URL("../icons/looks_two.svg?v=8b32caaaab1a1857da9a5fae67b95191fe68c2733ee446adb5338578a336006f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
