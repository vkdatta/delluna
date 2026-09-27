export const name="note_stack";
export const id="dl_c90e606d0dbb60842115";
export const url=new URL("../icons/note_stack.svg?v=0d03ac8a998c3f87d624de209deb8a92d90e4684b9429d93d6c46944fcce3f8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
