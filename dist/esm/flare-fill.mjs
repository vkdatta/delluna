export const name="flare-fill";
export const id="dl_774fc9766a2a9f046fcb";
export const url=new URL("../icons/flare-fill.svg?v=d317bee5638529507323e1ccbcc76a641a5dd7db0c208a4b627a41c273cba7fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
