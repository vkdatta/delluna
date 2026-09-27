export const name="bookmarks-light";
export const id="dl_34fd7fe962a14d40b67c";
export const url=new URL("../icons/bookmarks-light.svg?v=05251d2a0fa8734af8d68490ae4e54d01f2318ca31045b21d586c06b405d6e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
