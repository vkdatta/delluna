export const name="bookmark_check";
export const id="dl_50ce408dc56f455c94b6";
export const url=new URL("../icons/bookmark_check.svg?v=c14652c73db68104b9784666cf79c735d074ee714a37c66e88f2e835c3802593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
