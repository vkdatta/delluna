export const name="trash-2";
export const id="dl_45a3af58b26646a7b00a";
export const url=new URL("../icons/trash-2.svg?v=251da3fe1dcb35ffa6daeaf5042a78731a4f339a054839a2206d356a4fe3809f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
