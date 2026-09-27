export const name="spellcheck-fill";
export const id="dl_64ebfd6b7517e9107530";
export const url=new URL("../icons/spellcheck-fill.svg?v=e76fd478bc9085d3fb145aaebef3eebb64e5f2a1259537655ecb0017a9de3a12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
