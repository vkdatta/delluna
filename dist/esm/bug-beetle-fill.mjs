export const name="bug-beetle-fill";
export const id="dl_5f6f3396a86b4db3bd6e";
export const url=new URL("../icons/bug-beetle-fill.svg?v=70c4a6dc86d18ee98a4eb1ed932d5fb3005303f85cc7f7bbe02aee9aa4da0feb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
