export const name="hide_source-fill";
export const id="dl_73c77ea88e415d4667c7";
export const url=new URL("../icons/hide_source-fill.svg?v=0e69c532ce9a38882a086eca7049a32a3696de7dafc97f1e00aab509859cdafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
