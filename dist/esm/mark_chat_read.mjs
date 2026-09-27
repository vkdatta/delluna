export const name="mark_chat_read";
export const id="dl_a13d8e765eb5c443bbcc";
export const url=new URL("../icons/mark_chat_read.svg?v=f85f934294cefd07c3651070f2b71bf54f71904ed1bf84b76c13c0faef85d044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
