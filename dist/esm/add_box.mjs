export const name="add_box";
export const id="dl_0b6c959025b9de900c8a";
export const url=new URL("../icons/add_box.svg?v=808801c6718cc11d134b29e909d6bdebdea4ed1ed6d804e7328c17240a191676",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
