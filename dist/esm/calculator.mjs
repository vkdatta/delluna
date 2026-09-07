export const name="calculator";
export const id="dl_8af598981a01420ab06e";
export const url=new URL("../icons/calculator.svg?v=83c7343dba80b2359cfe617ffdc89b80f7555a53cb2d6ff13b48ce16a062f644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
