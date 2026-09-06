export const name="envelope-fill";
export const id="dl_e574f8b8dfc24141bd00";
export const url=new URL("../icons/envelope-fill.svg?v=e91e28364c2c7b348ff6ab8360a7f261de499c87d5bddafddd29060d170301dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
