export const name="stylus_pen";
export const id="dl_f33cd1e6721968c16f49";
export const url=new URL("../icons/stylus_pen.svg?v=9da9b5b642947c8c09ea770999ca7fd15d993666befb95007d523a0b64c2d08d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
