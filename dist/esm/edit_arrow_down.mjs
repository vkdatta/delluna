export const name="edit_arrow_down";
export const id="dl_9fcfd58a965e662073b2";
export const url=new URL("../icons/edit_arrow_down.svg?v=e6ff05b4ffb0a93c007c3bae1dd7f238a79cfe33521c2764e00bd9011b1c3cc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
