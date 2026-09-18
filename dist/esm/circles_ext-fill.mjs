export const name="circles_ext-fill";
export const id="dl_79ebd99c3ed4458f830a";
export const url=new URL("../icons/circles_ext-fill.svg?v=f502fdd15568bac5270084bc182dd287da59216275129f2745a5d5c01b163b4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
